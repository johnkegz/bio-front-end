
const initialState = {
    isFetching: false,
    data: [],
    error: {},
};

export default (state = initialState, action) => {
    switch(action.type){
        //get dashboard feed
        case 'GET_DASHBOARD_FEED':
            return {
                ...state,
                isLoading: true
            };

        case 'GET_DASHBOARD_FEED_SUCCESS':
            return {
                ...state,
                isLoading:false,
                data: action.response.data
            };

        case 'GET_DASHBOARD_FEED_FAILURE':
            return {
                ...state,
                isLoading:false,
                    };
        default:
            return state;
    }
}
