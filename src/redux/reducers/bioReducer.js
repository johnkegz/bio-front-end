import { 
    FETCH_BIO,
    FETCH_BIO_SUCCESS, 
    FETCH_BIO_FAILURE 
} from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    data: [],
    error: {},
};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_BIO:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_BIO_SUCCESS:
            return {
                ...state,
                isLoading:false,
                data: action.bio
            };

        case FETCH_BIO_FAILURE:
            return {
                ...state,
                isLoading:false,
                    };
        default:
            return state;
    }
}
