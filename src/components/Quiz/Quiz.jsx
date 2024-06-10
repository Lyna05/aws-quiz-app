import React, { useState, useEffect } from 'react';
import { data } from '../../assets/data';
import './Quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [rating, setRating] = useState(0);
  const [showStars, setShowStars] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showTempResult, setShowTempResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [isRandomMode, setIsRandomMode] = useState(false);

  useEffect(() => {
    if (showResult) {
      setShowTempResult(true);
      const timer = setTimeout(() => {
        setShowTempResult(false);
        setShowResult(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showResult]);

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowAnswer(true);
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

  const handleFeedback = () => {
    setShowStars(!showStars);
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const handleRandomQuestions = () => {
    const shuffled = data.map((_, index) => index).sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setIsRandomMode(true);
    setCurrentQuestion(shuffled[0]);
  };

  const question = isRandomMode ? data[shuffledQuestions[currentQuestion]] : data[currentQuestion];
  const totalQuestions = data.length;
  const accuracy = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <p className="question-number">Frage {currentQuestion + 1} von {totalQuestions}</p>
        <p className="question-text">{question.question}</p> {/* Textul întrebării */}
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
          <button onClick={handleFeedback} className="quiz-button">Feedback-Senden</button>
          <button onClick={handleRandomQuestions} className="quiz-button">Random-Fragen</button>
        </div>

        {showAnswer && (
          <div className="full-answer">
            <p className="correct-answer">{question.info}</p>
            <p className="wrong-answer">{question.wrongInfo.option1}</p>
            <p className="wrong-answer">{question.wrongInfo.option2}</p>
            <p className="wrong-answer">{question.wrongInfo.option3}</p>
            <p className="wrong-answer">{question.wrongInfo.option4}</p>
          </div>
        )}

        {showStars && (
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
        )}

        {currentQuestion === data.length - 1 && (
          <button onClick={handleShowResult} className="show-result-button">
            Ergebnis-Anzeigen
          </button>
        )}

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
      </div>

      <div className="dot-container">
        {[...Array(25)].map((_, index) => (
          <div key={index} className="dot"></div>
        ))}
      </div>

      {showTempResult && (
        <div className="result-container">
          <p>Sie haben {correctAnswers} von {totalQuestions} Fragen richtig beantwortet ({accuracy.toFixed(2)}% Richtigkeit).</p>
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
  );
}

export default Quiz;