import React from 'react';
import EndPage from './EndPage';
import Question from './Question';

const QuizPage = ({ state, dispatch }) => {
  const allQuestions = state.questions.results;

  if (allQuestions.length === 0 ) {
    return <p>questions are loading...</p>
  }

  return (
    <div>
        {
          state.questionNum === allQuestions.length
            ? <EndPage state={state} dispatch={dispatch} />
            : <Question state={state} dispatch={dispatch} />
        }
    </div>
  );
};

export default QuizPage;
