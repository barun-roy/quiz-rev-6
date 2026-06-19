import React from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function NextButton() {
  const { dispatch, answer, numQuestions, index } = useQuiz();
  const checkIfLastQuestion = numQuestions === index + 1;
  if (answer === null) return null;
  if (!checkIfLastQuestion) {
    return (
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "nextQuestion",
          })
        }
      >
        Next
      </button>
    );
  }
  if (checkIfLastQuestion) {
    return (
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "finished",
          })
        }
      >
        Finish
      </button>
    );
  }
}
