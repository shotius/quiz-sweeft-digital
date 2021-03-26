import React, { useReducer} from 'react'
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage'
import { initialState, quizReducer } from './quizReducer'

const App = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState)
  const { isStarted } = state

  return (
    <div>
      <h1>quiz will start in 24 hours 14:10</h1>
      {
        isStarted 
        ? <QuizPage state={state} dispatch={dispatch} />
        : <StartPage state={state} dispatch={dispatch} />
      }
      
    </div>
  )
}

export default App