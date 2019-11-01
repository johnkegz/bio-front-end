import { 
    SUBMIT_FEED,
    SUBMIT_FEED_SUCCESS, 
    SUBMIT_FEED_FAILURE 
} from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    data: [],
    error: {},
};

export default (state = initialState, action) => {
    switch(action.type){
        case SUBMIT_FEED:
            return {
                ...state,
                isLoading: true
            };

        case SUBMIT_FEED_SUCCESS:
            return {
                ...state,
                isLoading:false,
                data: action.bio
            };

        case SUBMIT_FEED_FAILURE:
            return {
                ...state,
                isLoading:false,
                    };
        default:
            return state;
    }
}
