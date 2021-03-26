import React from 'react'

const Question = ({state, dispatch}) => {
    const { results } = state.questions

    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }


    const shuffledAnswers = () => {
        let { incorrect_answers } = results[state.questionNum]
        let { correct_answer } = results[state.questionNum]
        let answers = incorrect_answers.concat(correct_answer)

        answers = shuffle(answers)

        return answers
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

    const handleRadioSelect = (e) => 
        dispatch({ type: 'choose-answer', payload: e.target.value})
    
    const answerAndNext = () => 
        dispatch({ type: 'next-question', payload: state.questionNum + 1})
    
    return (
        <div>
            <div>
                {/* Question goes here, to show special entities string needs to be converted to html obj */}
                {decodeHtml(results[state.questionNum].question)}
            </div>
            <div>
                {/* answers go here */}
                {shuffledAnswers().map((answer, id) => (
                    <div key={id}>
                        <label>
                            <input 
                                type='radio'
                                value={answer}
                                name="answer"
                                onChange={handleRadioSelect}
                                
                                />
                            {answer}
                        </label>
                    </div>
                ))}
            </div>
            <button onClick={answerAndNext}>answer</button>
        </div>
    )
}

export default Question