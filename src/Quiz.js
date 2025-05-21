// src/Quiz.js
import React, { useState } from "react";
import quizData from "./data";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    return (
      <h2>
        You scored {score} out of {quizData.length}
      </h2>
    );
  }

  return (
    <div>
      <h2>{quizData[currentQuestion].question}</h2>
      <div className="options">
        {quizData[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
