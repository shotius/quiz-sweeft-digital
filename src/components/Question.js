import React, { useEffect } from 'react'

const Question = ({state, dispatch}) => {
    const { results } = state.questions

    // shuffle answers when quiz starts (first load)
    useEffect(() => {
        let { incorrect_answers } = results[state.questionNum]
        let { correct_answer } = results[state.questionNum]
        let answers = incorrect_answers.concat(correct_answer)

        answers = shuffle(answers)
        dispatch({ type: 'shuffle', payload: answers})

    }, [state.questionNum, dispatch, results])

    // function to decode special initials (&quot;...)
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }


    // shuffle all answers
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    }

    // handle radio button selection
    const handleRadioSelect = (e) => {
        dispatch({ type: 'choose-answer', payload: e.target.value})
    }
    
    // handle next question
    const answerAndNext = () => {
        // if selected answer is correct take one one point
        if(state.selectedAnswer === results[state.questionNum].correct_answer) {
            dispatch({ type: 'correct-answer', payload: state.correctAnswers + 1})
        } 
        // next question
        dispatch({ type: 'next-question', payload: state.questionNum + 1})
        // uncheck all buttons
        dispatch({ type: 'choose-answer', payload: ''})
        // shuffle answers of the next questions
    }

    // console.log("correct", results[state.questionNum].correct_answer)
    // console.log('correct answers', state.correctAnswers)

    return (
        <div>
            <div>
                {/* Question goes here, to show special entities string needs to be converted to html obj */}
                {decodeHtml(results[state.questionNum].question)}
            </div>
            <div>
                {/* answers go here */}
                {state.shuffledAnswers.map((answer, id) => (
                    <div key={id}>
                        <label>
                            <input 
                                type='radio'
                                value={answer}
                                name="answer"
                                checked={state.selectedAnswer === answer}
                                onChange={handleRadioSelect}
                                />
                            {decodeHtml(answer)}
                        </label>
                    </div>
                ))}
            </div>
            <button onClick={answerAndNext}>answer</button>
        </div>
    )
}

export default Question