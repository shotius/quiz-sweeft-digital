export const initialState  = {
    isStarted: false,
    category: '',
    difficulty: '',
    selectedAnswer: '',
    error: null,
    questionNum: 0,
    correctAnswers: 0,
    questions: [],
    shuffledAnswers: [],
    categories: []
  }

export function quizReducer(state, action) {
    switch (action.type) {
        case 'start': {
            return {
                ...state,
                isStarted: true,
                questinoNum: 0
            };
        }
        case 'start_again':{
            return {
                ...state,
                isStarted: false,
                questionNum: 0,
                correctAnswers: 0
            };
        }
        case 'set-category': {
            return {
                ...state, 
                category: action.payload 
            };
        }
        case 'set-difficulty': {
            return {
                ...state,
                difficulty: action.payload
            }
        }
        case 'set-questions': {
            return {
                ...state,
                questions: action.payload
            }
        }
        case 'set-categories': {
            return {
                ...state,
                categories: action.payload
            }
        }
        case 'choose-answer': {
            return {
                ...state,
                selectedAnswer: action.payload
            }
        }
        case 'next-question': {
            return {
                ...state,
                questionNum: action.payload
            }
        }
        case 'shuffle': {
            return {
                ...state,
                shuffledAnswers: action.payload
            }
        }
        case 'correct-answer': {
            return {
                ...state,
                correctAnswers: action.payload
            }
        }
        case 'error': {
            return {
                ...state,
                error: action.payload
            }
        }
        default: 
            return state
    }
}


