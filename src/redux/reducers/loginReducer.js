import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    data: [],
    error: {}
}

export default (state = initialState, action) => {

    switch(action) {
        case LOGIN:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: true,
                data: action.data
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