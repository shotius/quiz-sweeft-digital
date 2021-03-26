export const initialState  = {
    isStarted: false,
    questions: [],
    category: '',
    difficulty: '',
  }

export function quizReducer(state, action) {
    switch (action.type) {
        case 'start': {
            return {
                ...state,
                isStarted: true
            };
        }
        case 'start_again':{
            return {
                ...state,
                isStarted: false
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
        default: 
            return state
    }
}


