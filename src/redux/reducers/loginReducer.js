import { 
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    isFetching: false,
    data: [],
    error: {},
    registerResponse: {},
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: true,
                isAuthenticated: action.response !== 0 ? true: false,
                user: action.response
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading:false,
            }

        //register
        case REGISTER:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: true,
                registerResponse: action.response
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading:false,
            }

        default:
            return state;
    }
}
