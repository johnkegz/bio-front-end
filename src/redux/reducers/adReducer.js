
const initialState = {
    isFetching: false,
    data: {},
    error: {},
};

export default (state = initialState, action) => {
    switch(action.type){
        //get dashboard feed
        case 'POST_AD':
            return {
                ...state,
                isLoading: true
            };

        case 'POST_AD_SUCCESS':
            return {
                ...state,
                isLoading:false,
                data: action.response.data
            };

        case 'POST_AD_FAILURE':
            return {
                ...state,
                isLoading:false,
                    };
        default:
            return state;
    }
}
