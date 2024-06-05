
import './Quiz.css';
import { data } from '../../assets/data';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index < data.length - 1) {
        setIndex(index + 1);
        setQuestion(data[index + 1]);
        setLock(false);
        option_array.forEach(option => {
          option.current.classList.remove("wrong", "correct");
        });
      } else {
        setResult(true);
      }
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    option_array.forEach(option => {
      option.current.classList.remove("wrong", "correct");
    });
  };

  const sendFeedback = () => {
    emailjs.send('service_cy7fxa7', 'template_rfk55mw', {
      feedback,
      rating,
    }, 'yWvbAzVCVEoP5pspR') // Replace with your actual User ID
      .then(() => {
        alert('Feedback gesendet!');
        setFeedback('');
        setRating(0);
      })
      .catch(() => {
        alert('Fehler beim Senden des Feedbacks.');
      });
  };

  return (
    <div className='container'>
      <h1>Aws Quiz-App</h1>
      <hr />
      {result ? (
        <>
          <h2>Dein Ergebnis {score} von {data.length}</h2>
          <button onClick={reset}>Neustart</button>
          <div>
            <input type="text" value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Dein Feedback" required />
            <select value={rating} onChange={(e) => setRating(e.target.value)} required>
              <option value="">Bewerte die App</option>
              <option value="1">1 Stern</option>
              <option value="2">2 Sterne</option>
              <option value="3">3 Sterne</option>
              <option value="4">4 Sterne</option>
              <option value="5">5 Sterne</option>
            </select>
            <button onClick={sendFeedback}>Feedback senden</button>
          </div>
        </>
      ) : (
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul>
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
          </ul>
          <button onClick={next}>Weiter</button>
          <div className="index">{index + 1} von {data.length} Fragen</div>
          <div>
            <input type="text" value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Dein Feedback" required />
            <select value={rating} onChange={(e) => setRating(e.target.value)} required>
              <option value="">Bewerte die App</option>
              <option value="1">1 Stern</option>
              <option value="2">2 Sterne</option>
              <option value="3">3 Sterne</option>
              <option value="4">4 Sterne</option>
              <option value="5">5 Sterne</option>
            </select>
            <button onClick={sendFeedback}>Feedback senden</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
