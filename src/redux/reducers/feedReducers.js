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
                console.log("action.bio ++++++++++++++++");
            return {
                ...state,
                isLoading: true
            };

        case SUBMIT_FEED_SUCCESS:
            console.log("action.bio reducer++++++++++++++++", action.response.data.message);
            return {
                ...state,
                isLoading:false,
                data: action.response.data.message
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
