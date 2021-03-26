export const initialState  = {
    isStarted: false,
    category: '',
    difficulty: '',
    questionNum: 0,
    selectedAnswer: '',
    error: '',
    questions: [],
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
                questionNum: 0
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


