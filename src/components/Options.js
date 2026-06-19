import React from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Options() {
  const { questions, dispatch, answer, index } = useQuiz();
  const question = questions[index];
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, idx) => (
        <button
          className={`btn btn-option ${idx === answer ? "answer" : ""} ${hasAnswered ? (idx === question.correctOption ? "correct" : "wrong") : ""}`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: idx })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
