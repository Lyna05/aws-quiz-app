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

    const question = data[index]; // Aktuelle Frage basierend auf dem Index

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
            setIndex(prev => prev + 1); // Erhöhe den Index für die nächste Frage
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
            {!result ?
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                        <li onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                        <li onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
                        <li onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Weiter</button>
                    <div className="index">{index + 1} von {data.length} Fragen</div>
                    {feedback && <div>{feedback}</div>}
                    {info && <div>Zusätzliche Informationen: {info}</div>}
                </>
                :
                <>
                    <h2>Du hast {score} von {data.length} Punkten erreicht</h2>
                    <button onClick={reset}>Neustart</button>
                </>
            }
        </div>
    )
}

export default Quiz;
