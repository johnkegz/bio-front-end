import { 
    FETCH_ONE_PERSON,
    FETCH_ONE_PERSON_SUCCESS, 
    FETCH_ONE_PERSON_FAILURE 
} from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    data: [],
    error: {},
};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_ONE_PERSON:
            console.log('action +++', action);
            return {
                ...state,
                isLoading: true
            };

        case FETCH_ONE_PERSON_SUCCESS:
            console.log('action +++', action);
            return {
                ...state,
                isLoading:false,
                data: action.bio
            };

        case FETCH_ONE_PERSON_FAILURE:
            console.log('action +++', action);
            return {
                ...state,
                isLoading:false,
                    };
        default:
            return state;
    }
}
