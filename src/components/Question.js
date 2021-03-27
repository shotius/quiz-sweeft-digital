import React, { useEffect } from 'react'

const Question = ({state, dispatch}) => {
    const { results } = state.questions
    const blueLineLength = (window.innerWidth/10) * (state.questionNum + 1)

    // shuffle question answers on every next question
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
        // if selected answer is correct you got a point
        if(state.selectedAnswer === results[state.questionNum].correct_answer) {
            dispatch({ type: 'correct-answer', payload: state.correctAnswers + 1})
        } 
        // next question
        dispatch({ type: 'next-question', payload: state.questionNum + 1})
        // uncheck all buttons
        dispatch({ type: 'choose-answer', payload: ''})
    }
    return (
        <>
        <div id="blue-top" style={{width: blueLineLength, height: '5px', background: 'blue'}}></div>
        <div className="container qst-container" style={{width: '60em', marginTop: '3em'}}>
            <div className='lead' style={{marginBottom: '10px'}}>
                {/* Question goes here, to show special entities string needs to be converted to html obj */}
                {state.questionNum + 1}. {decodeHtml(results[state.questionNum].question)}
            </div>
            <div>
                <table class="table table-hover">
                    <tbody>
                    {/* answers go here */}
                        {state.shuffledAnswers.map((answer, id) => (
                            <tr key={id}>
                                <td style={{width: 20}}>
                                    <input 
                                        type='radio'
                                        value={answer}
                                        name="answer"
                                        checked={state.selectedAnswer === answer}
                                        onChange={handleRadioSelect}
                                        />
                                </td>
                                <td>
                                    {decodeHtml(answer)}
                                </td>
                            </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <button onClick={answerAndNext} className="btn btn-primary">answer</button>
        </div>
    </>
    )
}

export default Question