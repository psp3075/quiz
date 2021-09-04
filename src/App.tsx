import React, { useState } from "react";
import Card from "./components/Card";
import { fetchQuestions } from "./API";
import { Difficulty, QuestionState } from "./API";
import { GlobalStyle,Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nexQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <h1>Quiz Time</h1>
      {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
        <button className="app__start" onClick={startTrivia}>
          Start
        </button>
      )}
      {!gameOver && <p className="app__score">Points scored : {score}</p>}
      {loading && <p>Ready?</p>}
      {!loading && !gameOver && userAnswers.length !==TOTAL_QUESTIONS ? (
        <Card
          questionNum={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      ): (!gameOver && !loading && <><h2>Game over !!!</h2><h3>Click 'start' to play again</h3></>)}
      {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS -1 && (
          <button className="app__next" onClick={nexQuestion}>
            Next
          </button>
        )}
    </Wrapper>
    </>
  );
}

export default App;

//
