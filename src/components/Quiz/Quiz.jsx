import React, { useState } from 'react';
import { data } from '../../assets/data';
import './Quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [rating, setRating] = useState(0); // Rating pentru steluțe
  const [showStars, setShowStars] = useState(false); // Controlăm vizibilitatea steluțelor
  const [showResult, setShowResult] = useState(false); // Controlăm vizibilitatea rezultatului

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowAnswer(true); // Afiseaza raspunsul dupa ce s-a selectat un raspuns
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
    setShowStars(!showStars); // Alternăm vizibilitatea steluțelor
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleShowResult = () => {
    setShowResult(true); // Afiseaza rezultatul final
  };

  const question = data[currentQuestion];

  // Calcularea numărului de răspunsuri corecte
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
            {showAnswer ? 'Verbergen Antwort' : 'Zeige Antwort'}
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

        {/* Evaluare cu steluțe - vizibilă doar când se apasă pe Feedback */}
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

        {/* Buton pentru afișarea rezultatului */}
        {currentQuestion === data.length - 1 && (
          <button onClick={handleShowResult} className="show-result-button">
            Ergebnis anzeigen
          </button>
        )}

        {/* Afișarea rezultatului */}
        {showResult && (
          <div className="result-container">
            <h3>Ergebnis:</h3>
            <p>Anzahl der richtigen Fragen: {correctAnswers} / {totalQuestions}</p>
            <p>Präzision: {accuracy.toFixed(2)}%</p>
          </div>
        )}

      </div>

      {/* Elementul pentru bulinele numerotate */}
      <div className="dot-container">
        {[...Array(25)].map((_, index) => (
          <div key={index} className="dot">{index + 1}</div>
        ))}
      </div>

    </div>
  );
}

export default Quiz;
