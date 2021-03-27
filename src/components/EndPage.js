import React from 'react'

const EndPage = ({state, dispatch}) => {
    return (
        <div className='result' >
            {
                state.correctAnswers > 5
                    ? <p className='success'>passed {state.correctAnswers}/10</p>
                    : <p className='fail'>failed {state.correctAnswers}/10</p>
            }
            <button 
                 onClick={() => dispatch({type: 'start_again'})} 
                 className="btn btn-success"
                 >start again</button>
        </div>
    )
}

export default EndPage