import React, { useState, useEffect } from 'react';
import { data } from '../../assets/data';
import './Quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [rating, setRating] = useState(0); // Bewertung für Sterne
  const [showStars, setShowStars] = useState(false); // Sichtbarkeit der Sterne steuern
  const [showResult, setShowResult] = useState(false); // Sichtbarkeit des Ergebnisses steuern
  const [showTempResult, setShowTempResult] = useState(false); // Temporäre Anzeige des Ergebnisses steuern

  useEffect(() => {
    if (showResult) {
      setShowTempResult(true);
      const timer = setTimeout(() => {
        setShowTempResult(false);
        setShowResult(false); // Ergebnis dauerhaft ausblenden, nachdem es temporär angezeigt wurde
      }, 5000); // Das Ergebnis wird für 5 Sekunden angezeigt
      return () => clearTimeout(timer); // Timer bereinigen
    }
  }, [showResult]);

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowAnswer(true); // Antwort anzeigen, nachdem eine Option ausgewählt wurde
  };

  const handleNextQuestion = () => {
    if (selectedOption === data[currentQuestion].ans) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setSelectedOption(null);
    setShowAnswer(false);
    setCurrentQuestion((prevQuestion) => (prevQuestion + 1) % data.length);
  };

  const handlePrevQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setCurrentQuestion((prevQuestion) => (prevQuestion - 1 + data.length) % data.length);
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
    setSelectedOption(null);
  };

  const handleFeedback = () => {
    setShowStars(!showStars); // Sichtbarkeit der Sterne umschalten
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleShowResult = () => {
    setShowResult(true); // Endergebnis anzeigen
  };

  const question = data[currentQuestion];

  // Berechnung der Anzahl der richtigen Antworten
  const totalQuestions = data.length;
  const accuracy = correctAnswers / totalQuestions * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2>{question.question}</h2>
        <p className="question-number">Frage {currentQuestion + 1} von {totalQuestions}</p>
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
          <button onClick={handleShowAnswer} className="show-answer-button">
            {showAnswer ? 'Antwort verbergen' : 'Antwort anzeigen'}
          </button>
          <button onClick={handleFeedback} className="feedback-button">Feedback</button>
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

        {/* Bewertung mit Sternen - sichtbar nur, wenn auf Feedback geklickt wird */}
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

        {/* Button zur Anzeige des Ergebnisses */}
        {currentQuestion === data.length - 1 && (
          <button onClick={handleShowResult} className="show-result-button">
            Ergebnis anzeigen
          </button>
        )}

        {/* Text und YouTube-Video unter den Buttons "Antwort anzeigen" und "Feedback" */}
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

      {/* Element für die nummerierten Punkte */}
      <div className="dot-container">
        {[...Array(25)].map((_, index) => (
          <div key={index} className="dot">{index + 1}</div>
        ))}
      </div>

      {/* Temporäre Anzeige des Ergebnisses in der oberen rechten Ecke */}
      {showTempResult && (
        <div className="temp-result-container">
          <h3>Ergebnis:</h3>
          <p>Anzahl der richtigen Fragen: {correctAnswers} / {totalQuestions}</p>
          <p>Präzision: {accuracy.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
