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
      
    return (
        <div>
            <button onClick={() => dispatch({ type: 'next-question', payload: state.questionNum + 1})}>next</button>
            <div>
                {/* Question goes here, to show special entities string needs to be converted to html obj */}
                {decodeHtml(results[state.questionNum].question)}
            </div>
            <div>
                {/* answers go here */}
                {shuffledAnswers().map((ans, id) => (
                    <li key={id}>{decodeHtml(ans)}</li>
                ))}
            </div>
        </div>
    )
}

export default Question