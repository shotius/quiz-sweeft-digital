import React from 'react'
import EndPage from './EndPage'
import Question from './Question'

const QuizPage = ({state, dispatch}) => {    
    const { results } = state.questions

    return (
        <div>
            {
             state.questionNum === results.length - 1
                ? <EndPage state={state} dispatch={dispatch} />
                : <Question state={state} dispatch={dispatch} />
            }
        </div>
    )
}



export default QuizPage