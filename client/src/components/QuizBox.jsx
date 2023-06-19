import React, { useState } from 'react';
import { quiz } from './data.js';
import './quizBox.css';


const QuizBox = () => {

    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });

    const {questions} = quiz;
    const { question, answers, correctAnswer } = questions[activeQuestion];

    const onAnswerSelected = (answer, idx) => {
        setChecked(true);
        setSelectedAnswerIndex(idx);
        if (answer === correctAnswer) {
            setSelectedAnswer(true);
            console.log('true');
        } else {
            setSelectedAnswer(false);
            console.log('false');
        }
    };

    const nextQuestion = () => {
        setSelectedAnswerIndex(null);
        setResult((previous) => 
            selectedAnswer ? {
                ...previous,
                score: previous.score + 500,
                correctAnswers: previous.correctAnswers + 1
            } : {
                ...previous,
                wrongAnswers: previous.wrongAnswers + 1,
            }
        );
        if (activeQuestion !== questions.length -1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setActiveQuestion(0)
            setShowResult(true)
        }
        setChecked(false)
    };

    return (
        <div className='w-full h-screen flex'>
    <div name='quiz' className='container'>
        <h1 className='text-9xl text-center font-bold text-white'>Quiz Time</h1>
        <div>
            {/* <h2>
                Question: {activeQuestion + 1}
                <span>{questions.length}</span>
            </h2> */}
        </div>
        <div>
            {!showResult ? (
            <div className='w-full h-full'>
                <h3 className='text-center font-bold text-5xl mt-6 animate__animated animate__fadeIn animate__delay-3s'>{questions[activeQuestion].question}</h3>
                {answers.map((answer, idx) => (
                    <li key={idx} onClick={() => onAnswerSelected(answer, idx)} 
                    className={selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'}>
                        <span className='text-4xl font-bold text-pink-400'>{answer}</span>
                    </li>
                ))}
                {checked ? (
                  <button onClick={nextQuestion} className='btn'>
                    {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                  </button>  
                ) : (
                    <button onClick={nextQuestion} disabled className='btn-disabled'>
                        {' '}
                        {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                    </button>
                )}
            </div>
            ) : (
            <div className='quiz-container'>
                <h3>Results</h3>
                <h3>Total {(result.score / 2500) * 100}%</h3>
                <p>
                    Total Questions: <span>{questions.length}</span>
                </p>
                <p>
                    Total Score: <span>{result.score}</span>
                </p>
                <p>
                    Correct Answers: <span>{result.correctAnswers}</span>
                </p>
                <p>
                    Wrong Answers: <span>{result.wrongAnswers}</span>
                </p>
                <button onClick={() => window.location.reload()}>Click Here to Play Again</button>
                <button onClick={() => window.location.reload()}>Click Here to Do The Opposite</button>
            </div>
            
            
            )}
            
        </div>
    </div>
    </div>
    );
};

export default QuizBox