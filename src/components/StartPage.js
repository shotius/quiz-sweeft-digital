import React, { useEffect } from 'react';
import axios from 'axios';

const StartPage = ({ state, dispatch }) => {
  // select varibles are destructured here
  const { category, difficulty } = state;

  // links for api
  const questionsApi = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;
  const categoriesApi = 'https://opentdb.com/api_category.php';

  // on the first load fetch questions categories
  useEffect(() => {
    axios
      .get(categoriesApi)
      .then(({ data }) => {
        dispatch({ type: 'set-categories', payload: data.trivia_categories });
      });
  }, [dispatch, categoriesApi]);

  // fetching questions from API and start quiz
  const fetchQuestions = (e) => {
    e.preventDefault();
    axios
      .get(questionsApi)
      .then(({ data }) => {
        dispatch({ type: 'set-questions', payload: data });
        dispatch({ type: 'start' });
        dispatch({ type: 'error', payload: null})
      })
      .catch((err) => {
        console.error(err)
        dispatch({ type: 'error', payload: err.message})
      });
  };

  // handles selecting category
  const handleCategorySelect = (e) => {
    dispatch({
      type: 'set-category',
      payload: e.target.value,
    });
  };

  // handle difficylty selection
  const handleDifficultySelect = (e) => {
    dispatch({
      type: 'set-difficulty',
      payload: e.target.value,
    });
  };

  // list categories in select tag
  const listCategories = () => (
    state.categories.map((category) => (
      <option key={category.id} value={category.id}>{category.name}</option>
    ))
  );

  // start page is render here
  return (
    <div className="container" style={{ width: '20em', marginTop: '5em' }}>
      {state.error && <div className="error">{state.error}</div>}
      <div className="card">
        <div className="card-body">
          <form onSubmit={fetchQuestions}>
            <div>
              {/* category selections */}
              <label>
                select category
                <select
                  className="form-control"
                  onChange={handleCategorySelect}
                  style={{ width: '250px' }}
                >
                  <option value="any">Any Category</option>
                    {
                      listCategories()
                    }
                </select>
              </label>
            </div>
            <div>
              {/* difficulty selection */}
              <label>
                select difficulty
                <select
                  className="form-control"
                  onChange={handleDifficultySelect}
                  style={{ width: '250px' }}
                >
                  <option value="any">Any Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
            </div>
            <button type="submit" className="btn btn-primary">start test</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
