import React, { useState } from 'react';
import { data } from '../../assets/data';
import './Quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState(0); // Starea pentru feedback

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setCurrentQuestion((prevQuestion) => (prevQuestion + 1) % data.length);
    setFeedback(0); // Resetăm feedback-ul la următoarea întrebare
  };

  const handlePrevQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setCurrentQuestion((prevQuestion) => (prevQuestion - 1 + data.length) % data.length);
    setFeedback(0); // Resetăm feedback-ul la întrebarea anterioară
  };

  const question = data[currentQuestion];

  const handleFeedback = (rating) => {
    setFeedback(rating);
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="quiz-container">
      <h2>{question.question}</h2>
      <p>Frage #{currentQuestion + 1} von {data.length}</p>
      <div>
        <button onClick={() => handleOptionClick(1)}>{question.option1}</button>
        <button onClick={() => handleOptionClick(2)}>{question.option2}</button>
        <button onClick={() => handleOptionClick(3)}>{question.option3}</button>
        <button onClick={() => handleOptionClick(4)}>{question.option4}</button>
      </div>

      {/* Butonul pentru afișarea răspunsului */}
      <button onClick={handleShowAnswer} className="response-button">Zeige Antwort</button>

      {showAnswer && (
        <div>
          <p>Antwort: {question.info}</p>
          <p>Falsch. {question.wrongInfo[`option${selectedOption}`]}</p>
          <p>Corect: {question.correctInfo[`option${question.ans}`]}</p>
          <p>Feedback: {feedback}</p>
        </div>
      )}

      {/* Butonul pentru întrebarea precedentă */}
      <button onClick={handlePrevQuestion} className="small-button">Vorherige Frage</button>
      
      {/* Butonul pentru întrebarea următoare */}
      <button onClick={handleNextQuestion} className="small-button">Nächste Frage</button>

      {/* Adăugăm butoanele de feedback */}
      <div className="feedback-buttons">
        <p>Feedback:</p>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button key={rating} onClick={() => handleFeedback(rating)}>
            {[...Array(rating)].map((_, index) => (
              <span key={index} role="img" aria-label="star">⭐</span>
            ))}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
