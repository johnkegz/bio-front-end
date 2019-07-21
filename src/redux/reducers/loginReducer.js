import { 
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    isFetching: false,
    data: [],
    error: {}
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
                isAuthenticated: true,
                user: action.response
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading:false,
            }
        default:
            return state;
    }
}
