import React, { useReducer} from 'react'
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage'
import { initialState, quizReducer } from './quizReducer'

const App = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState)
  const { isStarted } = state

  return (
    <div>
      {
        isStarted 
        ? <QuizPage state={state} dispatch={dispatch} />
        : <StartPage state={state} dispatch={dispatch} />
      }
      
    </div>
  )
}

export default App