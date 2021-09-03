import React,{useState} from 'react';
import Card from './components/Card';
import { fetchQuestions } from './API';
import { Difficulty } from './API';

const TOTAL_QUESTIONS=10;

function App() {
  const [loading,setLoading]=useState(false)
  const [questions,setQuestions]=useState([])
  const [number,setNumber]=useState(0)
  const [userAnswers,setAnswers]=useState([])
  const [score,setScore]=useState(0)
  const [gameOver,setGameOver]=useState(true)

  console.log(fetchQuestions(TOTAL_QUESTIONS,Difficulty.EASY))

  const startTrivia=async()=>{}
  
  const checkAnswer=(e:React.MouseEvent<HTMLButtonElement>)=>{}
  
  const nexQuestion=()=>{}
  return (
    <div className="app">
      <h1>Quiz Time</h1>
      <button className='app__start' onClick={startTrivia}>Start</button>
    <p className="score">Points:</p>
    <p>ready?</p>
    {/* <Card questionNum={number+1}
    totalQuestions={TOTAL_QUESTIONS}
    question={questions[number].question}
    answers={questions[number].answers}
    userAnswer={userAnswers?userAnswers[number]:undefined}
    callback={checkAnswer}
    /> */}
    <button className='app__next' onClick={nexQuestion}>Next</button>
    </div>
  );
}

export default App;

//