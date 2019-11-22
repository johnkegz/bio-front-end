import { 
    HANDLE_SUBMIT,
    HANDLE_SUBMIT_SUCCESS,
    HANDLE_SUBMIT_FAILURE
} from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    data: [],
    error: {},
};

export default (state = initialState, action) => {
    switch(action.type){
        case HANDLE_SUBMIT:
            return {
                ...state,
                isLoading: true
            };

        case HANDLE_SUBMIT_SUCCESS:
            return {
                ...state,
                isLoading:false,
                data: action.bio
            };

        case HANDLE_SUBMIT_FAILURE:
            return {
                ...state,
                isLoading:false,
                    };
        default:
            return state;
    }
}
