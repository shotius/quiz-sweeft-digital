import React from 'react'

const EndPage = ({state, dispatch}) => {
  const allQuestions = state.questions.results;

    return (
        <div className='result' >
            {
                state.correctAnswers > 5
                    ? <p className='success'>passed {state.correctAnswers}/{allQuestions.length}</p>
                    : <p className='fail'>failed {state.correctAnswers}/{allQuestions.length}</p>
            }
            <button 
                 onClick={() => dispatch({type: 'start_again'})} 
                 className="btn btn-success"
                 >start again</button>
        </div>
    )
}

export default EndPage