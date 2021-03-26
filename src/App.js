import React, {useState} from 'react'
import StartPage from './components/StartPage'

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false)

  const startQuiz = () => {
    setQuizStarted(true)
  }

  const startAgain = () => {
    setQuizStarted(false)
  }
  
  return (
    <div>
      <h1>quiz will start in 24 hours 14:10</h1>
      {
        quizStarted 
        ? <div><button onClick={startAgain}>start again</button></div>
        : <StartPage startQuiz={startQuiz} />
      }
      
    </div>
  )
}

export default App