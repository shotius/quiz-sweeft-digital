import React, { useEffect } from 'react';

const Question = ({ state, dispatch }) => {
  const { results } = state.questions;
  const blueLineLength = (window.innerWidth / 10) * (state.questionNum + 1);

  // shuffle question answers on every next question
  useEffect(() => {
    const { incorrect_answers } = results[state.questionNum];
    const { correct_answer } = results[state.questionNum];
    let answers = incorrect_answers.concat(correct_answer);

    answers = shuffle(answers);
    dispatch({ type: 'shuffle', payload: answers });
  }, [state.questionNum, dispatch, results]);

  // function to decode special initials (&quot;...)
  function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  // shuffle all answers
  function shuffle(array) {
    let currentIndex = array.length; let temporaryValue; let
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // handle radio button selection
  const handleRadioSelect = (e) => {
    // if (e.target.value){
    //     let payload = e.target.value
    // } else {
    //     let payload = e.target.querySelector('input').getAttribute('value')
    // }
    let payload = e.target.value ? e.target.value : e.target.querySelector('input').getAttribute('value')
    dispatch({ type: 'choose-answer', payload: payload})
  };

  // handle next question
  const answerAndNext = () => {
    // validation if answer is chosen
    if (!state.selectedAnswer) {
      dispatch({ type: 'error', payload: 'You have to choose answer' });
    } else {
      // if selected answer is correct you got a point
      if (state.selectedAnswer === results[state.questionNum].correct_answer) {
        dispatch({ type: 'correct-answer', payload: state.correctAnswers + 1 });
      }
      // next question
      dispatch({ type: 'next-question', payload: state.questionNum + 1 });
      // uncheck all buttons
      dispatch({ type: 'choose-answer', payload: '' });
      // remove error
      dispatch({ type: 'error', payload: null });
    }
  };

  return (
    <>
      <div id="blue-top" style={{ width: blueLineLength, height: '5px', background: 'blue' }} />
      <div className="container qst-container" style={{ width: '60em', marginTop: '3em' }}>
        <div className="lead" style={{ marginBottom: '10px' }}>
          {/* Question goes here, to show special entities string needs to be converted to html obj */}
          {state.questionNum + 1}
          .
          {decodeHtml(results[state.questionNum].question)}
        </div>
        <div>
          {state.error && <div className="error">{state.error}</div>}
          <table className="table table-hover">
            <tbody>
              {/* answers go here */}
              {state.shuffledAnswers.map((answer, id) => (
                <tr key={id} onClick={handleRadioSelect}>
                  <td>
                    <label>
                        <input
                            type="radio"
                            value={answer}
                            name="answer"
                            onClick={(e) => e.stopPropagation()}
                            checked={state.selectedAnswer === answer}
                            onChange={handleRadioSelect}
                          />
                        {decodeHtml(answer)}
                      </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={answerAndNext} className="btn btn-primary">answer</button>
      </div>
    </>
  );
};

export default Question;
