import React, { useState, useEffect, useRef } from 'react';
import { data } from '../../assets/data';
import { correctInfo } from '../../assets/correctInfo';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Quiz.css';
import './clock.mp3';

console.log(data); // Debug-Ausgabe
console.log(correctInfo); // Debug-Ausgabe

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [rating, setRating] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [isRandomMode, setIsRandomMode] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [userName, setUserName] = useState(""); // Added state for user name
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 Minuten in Sekunden
  const [timerActive, setTimerActive] = useState(false); // Timer ist standardmäßig nicht aktiv
  const [showReviewModal, setShowReviewModal] = useState(false); // Status für Überprüfungsmodal
  const [showMarkedQuestionsModal, setShowMarkedQuestionsModal] = useState(false); // Status für markierte Fragenmodal

  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (timerActive) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 1) {
            clearInterval(timerRef.current);
            playSound();
            alert('Ihre Zeit ist vorüber!');
            setShowResult(true);
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [timerActive]);

  const playSound = () => {
    const audio = new Audio('/clock.mp3'); // Pfad zu Ihrer Sounddatei
    audio.play();
  };

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowAnswer(true);
    const isCorrect = optionIndex === data[currentQuestion].ans;
    setAnsweredQuestions([...answeredQuestions, { question: currentQuestion, isCorrect }]);
  };

  const handleNextQuestion = () => {
    if (selectedOption === data[currentQuestion].ans) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setSelectedOption(null);
    setShowAnswer(false);

    if (isRandomMode) {
      setCurrentQuestion((prevQuestion) => (prevQuestion + 1) % shuffledQuestions.length);
    } else {
      setCurrentQuestion((prevQuestion) => (prevQuestion + 1) % data.length);
    }

    if (currentQuestion + 1 === totalQuestions) {
      setShowResult(true);
    }
  };

  const handlePrevQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);

    if (isRandomMode) {
      setCurrentQuestion((prevQuestion) => (prevQuestion - 1 + shuffledQuestions.length) % shuffledQuestions.length);
    } else {
      setCurrentQuestion((prevQuestion) => (prevQuestion - 1 + data.length) % data.length);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
    setSelectedOption(null);
  };

  const handleFeedbackToggle = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  const handleRandomQuestions = () => {
    if (isRandomMode) {
      setIsRandomMode(false);
      setShuffledQuestions([]);
    } else {
      const shuffled = data.map((_, index) => index).sort(() => Math.random() - 0.5);
      setShuffledQuestions(shuffled);
      setIsRandomMode(true);
      setCurrentQuestion(shuffled[0]);
    }
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestion(index);
    setShowAnswer(false);
    setSelectedOption(null);
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleFeedbackSubmit = async () => {
    const feedbackContent = `Rating: ${rating} stars\nFeedback: ${feedback}`;
    console.log("Feedback submitted:", feedbackContent);

    // Trimite emailul
    await sendFeedback(userName, feedbackContent, rating);

    setUserName(""); // Clear the user name input
    setFeedback("");
    setRating(0);
    alert("Vielen Dank für Ihr Feedback!");
  };

  const sendFeedback = (userName, feedbackContent, rating) => {
    emailjs.send('service_cy7fxa7', 'template_rfk55mw', {
      from_name: userName,
      message: feedbackContent,
      rating: rating,
    }, 'yWvbAzVCVEoP5pspR') // Replace with your actual User ID
      .then(() => {
        alert('Feedback gesendet!');
        setUserName(""); // Clear the user name input
        setFeedback('');
        setRating(0);
      })
      .catch(() => {
        alert('Fehler beim Senden des Feedbacks.');
      });
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setCorrectAnswers(0);
    setRating(0);
    setShowResult(false);
    setShuffledQuestions([]);
    setIsRandomMode(false);
    setFeedback("");
    setShowFeedbackForm(false);
    setAnsweredQuestions([]);
    setMarkedQuestions([]);
    setTimeLeft(40 * 60); // Timer zurücksetzen
    setTimerActive(false); // Timer nicht automatisch starten
  };

  const handleMarkQuestion = () => {
    if (!markedQuestions.includes(currentQuestion)) {
      setMarkedQuestions([...markedQuestions, currentQuestion]);
    } else {
      setMarkedQuestions(markedQuestions.filter(q => q !== currentQuestion));
    }
  };

  const handleReviewAttempt = () => {
    setShowReviewModal(true);
  };

  const closeReviewModal = () => {
    setShowReviewModal(false);
  };

  const handleShowMarkedQuestions = () => {
    setShowMarkedQuestionsModal(true);
  };

  const closeMarkedQuestionsModal = () => {
    setShowMarkedQuestionsModal(false);
  };

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      navigate('/'); // Redirect to login page after logout
    } catch (err) {
      alert('Logout failed. Please try again.');
    }
  };

  const startTimer = () => {
    setTimerActive(true);
  };

  const question = isRandomMode ? data[shuffledQuestions[currentQuestion]] : data[currentQuestion];
  const totalQuestions = data.length;
  const accuracy = (correctAnswers / totalQuestions) * 100;

  const getQuestionClass = (index) => {
    const answeredQuestion = answeredQuestions.find(q => q.question === index);
    if (!answeredQuestion) return '';
    return answeredQuestion.isCorrect ? 'correct' : 'wrong';
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const extractDomain = (info) => {
    const match = info.match(/Domain:(\d+)/);
    return match ? match[1] : "";
  };

  return (
    <div className="quiz-container">
      <div className="left-panel">
        <h1>AWS QUIZ PROJEKT APP</h1>
        <p>Dieses Projekt wird von Oskar, Gülcan, Lyne, Emanuel, Asadul und Nabil durchgeführt und umgesetzt.</p>
        <p>Slogan: Teamarbeit, Harmonie und gegenseitiger Respekt.</p>
      </div>
      <div className="main-content">
        <div className="header-section">
          <div className="header-buttons">
            <button className="restart-button" onClick={handleRestart}>Neustart</button>
            {!timerActive && <button onClick={startTimer} className="start-timer-button">Timer Starten</button>}
            <button className="logout-button" onClick={handleLogout}>Ausloggen</button>
          </div>
          <div className="timer">
            {formatTime(timeLeft)}
          </div>
        </div>
        <div className="quiz-content">
          <p className="question-number">Frage {currentQuestion + 1} von {totalQuestions}</p>
          <p className="question-text">{question.question}</p>
          <div className="answer-buttons">
            <button
              onClick={() => handleOptionClick(1)}
              className={selectedOption === 1 ? (question.ans === 1 ? "correct" : "wrong") : ""}
            >
              {question.option1}
            </button>
            <button
              onClick={() => handleOptionClick(2)}
              className={selectedOption === 2 ? (question.ans === 2 ? "correct" : "wrong") : ""}
            >
              {question.option2}
            </button>
            <button
              onClick={() => handleOptionClick(3)}
              className={selectedOption === 3 ? (question.ans === 3 ? "correct" : "wrong") : ""}
            >
              {question.option3}
            </button>
            <button
              onClick={() => handleOptionClick(4)}
              className={selectedOption === 4 ? (question.ans === 4 ? "correct" : "wrong") : ""}
            >
              {question.option4}
            </button>
          </div>

          <div className="navigation-buttons">
            <button onClick={handlePrevQuestion} className="prev-button">Vorherige Frage</button>
            <button onClick={handleNextQuestion} className="next-button">Nächste Frage</button>
          </div>

          <div className="answer-feedback-container">
            <button onClick={handleShowAnswer} className="quiz-button">Antwort-Anzeigen</button>
            <button onClick={handleMarkQuestion} className="quiz-button">
              {markedQuestions.includes(currentQuestion) ? 'Frage entmarkieren' : 'Frage markieren'}
            </button>
            <button onClick={handleShowMarkedQuestions} className="quiz-button">Markierten Fragen anzeigen</button>
            <button onClick={handleRandomQuestions} className="quiz-button">
              {isRandomMode ? 'Random-Fragen deaktivieren' : 'Random-Fragen aktivieren'}
            </button>
          </div>

          {showAnswer && (
            <div className="full-answer">
              <p className="domain-text">Domain: {extractDomain(question.info)}</p> {/* Afiseaza domain-ul */}
              <p className="correct-answer">{correctInfo[currentQuestion]}</p>
              <p className="wrong-answer">{question.wrongInfo.option1}</p>
              <p className="wrong-answer">{question.wrongInfo.option2}</p>
              <p className="wrong-answer">{question.wrongInfo.option3}</p>
              <p className="wrong-answer">{question.wrongInfo.option4}</p>
            </div>
          )}

          {showResult && (
            <div className="result-container">
              <p>Sie haben {correctAnswers} von {totalQuestions} Fragen richtig beantwortet ({accuracy.toFixed(2)}% Richtigkeit).</p>
            </div>
          )}

         

          <div className="side-panel">
            <button className="review-attempt-button side" onClick={handleReviewAttempt}>Überprüfung der Antworten</button>
            <div className="dot-container">
              {[...Array(totalQuestions)].map((_, index) => (
                <div
                  key={index}
                  className={`dot ${getQuestionClass(index)} ${index === currentQuestion ? 'current' : ''} ${markedQuestions.includes(index) ? 'marked' : ''}`}
                  onClick={() => handleQuestionClick(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="video-container">
            <p className="video-title">Erklärungsvideo</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3XFODda6YXo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <button onClick={handleFeedbackToggle} className="quiz-button">Feedback Senden</button>

          {showFeedbackForm && (
            <div className="feedback-form">
              <h3>Feedback</h3>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Schreiben Sie bitte hier Ihr Feedback..."
                rows="4"
                cols="50"
              ></textarea>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={index < rating ? 'star selected' : 'star'}
                    onClick={() => handleRating(index + 1)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <button onClick={handleFeedbackSubmit} className="submit-feedback-button">Senden</button>
            </div>
          )}
        </div>

        {showReviewModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-modal" onClick={closeReviewModal}>X</button>
              <h3>Deine Antworten</h3>
              <table className="review-table">
                <thead>
                  <tr>
                    <th>Nummer</th>
                    <th>Frage</th>
                    <th>Ergebnis</th>
                    <th>Öffnen</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((q, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{q.question}</td>
                      <td>{answeredQuestions.find(a => a.question === index) ? answeredQuestions.find(a => a.question === index).isCorrect ? 'Richtig' : 'Falsch' : 'keine Antwort'}</td>
                      <td><button onClick={() => handleQuestionClick(index)}>Öffnen</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {showMarkedQuestionsModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-modal" onClick={closeMarkedQuestionsModal}>X</button>
              <h3>Markierten Fragen</h3>
              <table className="review-table">
                <thead>
                  <tr>
                    <th>Nummer</th>
                    <th>Frage</th>
                    <th>Ergebnis</th>
                    <th>Öffnen</th>
                  </tr>
                </thead>
                <tbody>
                  {markedQuestions.map((index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data[index].question}</td>
                      <td>{answeredQuestions.find(a => a.question === index) ? answeredQuestions.find(a => a.question === index).isCorrect ? 'Correct' : 'Wrong' : 'Unanswered'}</td>
                      <td><button onClick={() => handleQuestionClick(index)}>Öffnen</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="services-container">
          <ul className="services-list">
            <h2 className="red-bold"></h2>
            <li style={{ color: 'white' }}></li>
            {[].map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
