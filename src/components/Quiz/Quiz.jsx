import { useState } from 'react';
import { data } from '../../assets/data';
import './Quiz.css';

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [info, setInfo] = useState('');
    const [question, setQuestion] = useState(data[index]); // Verwende useState für die Frage

    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
                setFeedback('Richtig!');
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                setFeedback('Leider falsch.');
            }
            setInfo(question.info); // Setze die Info zur richtigen Antwort
        }
    }

    const next = () => {
        if (lock) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(prev => prev + 1);
            setQuestion(data[index + 1]); // Aktualisiere die Frage für die nächste Runde
            setLock(false);
            setFeedback('');
            setInfo('');
        }
    }

    const reset = () => {
        setIndex(0);
        setScore(0);
        setResult(false);
        setFeedback('');
        setInfo('');
    }

    return (
        <div className='container'>
            <h1>Aws Quiz-App</h1>
            <hr />
            {result ? (
                <>
                    <h2>You Scored {score} out of {data.length}</h2>
                    <button onClick={reset}>Reset</button>
                </>
            ) : (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                        <li onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                        <li onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
                        <li onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className="index">{index + 1} of {data.length} questions</div>
                    <div>{feedback}</div> {/* Feedback anzeigen */}
                    <div>{info}</div> {/* Info anzeigen */}
                </>
            )}
        </div>
    )
}

export default Quiz;
