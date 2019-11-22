import { 
    SUBMIT_FEED,
    SUBMIT_FEED_SUCCESS, 
    SUBMIT_FEED_FAILURE,
    GET_FEED,
    GET_FEED_SUCCESS, 
    GET_FEED_FAILURE,
    APPROVE,
    APPROVE_SUCCESS,
    APPROVE_FAILURE,
} from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    data: [],
    feedData: [],
    approveStatus: false,
    error: {},
};

export default (state = initialState, action) => {
    switch(action.type){
        //submit feed
        case SUBMIT_FEED:
            return {
                ...state,
                isLoading: true
            };

        case SUBMIT_FEED_SUCCESS:
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
        //get feed
        case GET_FEED:
            return {
                ...state,
                isLoading: true
            };
        
        case GET_FEED_SUCCESS:
            return {
                ...state,
                isLoading:false,
                feedData: action.response.data
            };
        
        case GET_FEED_FAILURE:
            return {
                ...state,
                isLoading:false,
                };
        //approve
        case APPROVE:
            return {
                ...state,
                isLoading: true
            };
        
        case APPROVE_SUCCESS:
            return {
                ...state,
                isLoading:false,
                approveStatus: true,
            };
        
        case APPROVE_FAILURE:
            return {
                ...state,
                isLoading:false,
                };

        default:
            return state;
    }
}
