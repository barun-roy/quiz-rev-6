import React from "react";

export default function NextButton({ dispatch, answer, numQuestions, index }) {
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
