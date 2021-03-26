import React, { useReducer} from 'react'
import StartPage from './components/StartPage';
import { initialState, quizReducer } from './quizReducer'

const App = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState)
  const { isStarted } = state

  return (
    <div>
      <h1>quiz will start in 24 hours 14:10</h1>
      {
        isStarted 
        ? <div><button onClick={() => dispatch({type: 'start_again'})}>start again</button></div>
        // : <StartPage startQuiz={startQuiz} />
        : <StartPage state={state} dispatch={dispatch} />
      }
      
    </div>
  )
}

export default App