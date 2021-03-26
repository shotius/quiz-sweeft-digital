import React from 'react'

const EndPage = ({state, dispatch}) => {
    return (
        <div>
            <p>quiz is done {state.correctAnswers}/10</p>
            <button onClick={() => dispatch({type: 'start_again'})}>start again</button>
        </div>
    )
}

export default EndPage