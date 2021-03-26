import React, {useState, useEffect} from 'react'
import axios from 'axios'

const StartPage = ({startQuiz}) => {

  const [questions, setQuestions] = useState([])
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')


  useEffect(() => {
    console.log(questions)
  }, [questions])

  
  // fetching questions from API
  const fetchQuestions = async (e) => {
    e.preventDefault()
    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`)
    await setQuestions(data)
    // this function will start quize (questions will appear)
    startQuiz()
  }

  // on change of category selector
  const handleCategoryChange = (e) => setCategory(e.target.value)

  // on change of defficulty selector
  const handleDifficultyChange = (e) => setDifficulty(e.target.value)

    return (
        <form onSubmit={fetchQuestions}>
        <label>
          select category
          <select className="form-control" onChange={handleCategoryChange}>
            <option value="any">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>		
          </select>
        </label>
        <div>
          <label>select difficulty</label>
            <select className="form-control" onChange={handleDifficultyChange}>
            <option value="any">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
		      </select>
        </div>
        <button>start test</button>
      </form>
    )
}

export default StartPage