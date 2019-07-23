import {
    AUTO_DATA,
    AUTO_DATA_SUCCESS,
    AUTO_DATA_FAILURE
} from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    data: [],
    error: {},
};

export default (state = initialState, action) => {
    switch(action.type){
        /**Auto data cases */
        case AUTO_DATA:
            return {
                ...state,
                isLoading: true
            };

        case AUTO_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false,
                data: action.response
            };

        case AUTO_DATA_FAILURE:
            return {
                ...state,
                isLoading:false,
                    };
        /**End of Auto data cases */
        default:
            return state;
    }
}
