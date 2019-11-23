import { 
    FETCH_BIO,
    FETCH_BIO_SUCCESS, 
    FETCH_BIO_FAILURE,
    FETCH_ONE_PERSON,
    FETCH_ONE_PERSON_SUCCESS,
    FETCH_ONE_PERSON_FAILURE,
    HANDLE_SUBMIT,
    HANDLE_SUBMIT_SUCCESS,
    HANDLE_SUBMIT_FAILURE,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOG_OUT,
    AUTO_DATA,
    AUTO_DATA_SUCCESS,
    AUTO_DATA_FAILURE,
    SUBMIT_FEED,
    SUBMIT_FEED_SUCCESS,
    SUBMIT_FEED_FAILURE,
    GET_FEED,
    GET_FEED_SUCCESS,
    GET_FEED_FAILURE,
    APPROVE,
    APPROVE_SUCCESS,
    APPROVE_FAILURE,

} from './actionTypes';
/**fetch all */
export const fetchBio = () => ({
    type: FETCH_BIO
});

export const fetchBioSuccess = (bio) => ({
    type: FETCH_BIO_SUCCESS,
    bio
});

export const fetchBioFailure = (error) => ({
    type: FETCH_BIO_FAILURE,
    error
});
/**end of fetch all */

/**fetch one */
export const getOnePerson = (id) => ({
    type: FETCH_ONE_PERSON,
    id
});

export const getOnePersonSuccess = (bio) => ({
    type: FETCH_ONE_PERSON_SUCCESS,
    bio
});

export const getOnePersonFailure = (error) => ({
    type: FETCH_ONE_PERSON_FAILURE,
    error
});
/**End of fetch one */

/**handle submit */
export const handleSubmit = (data) => ({
    type: HANDLE_SUBMIT,
    data
});

export const handleSubmitSuccess = (response) => ({
    type: HANDLE_SUBMIT_SUCCESS,
    response
});

export const handleSubmitFailure = (error) => ({
    type: HANDLE_SUBMIT_FAILURE,
    error
});
/**end of handle submit */

/**register */
export const register = (data) => ({
    type: REGISTER,
    data
});

export const registerSuccess = (response) => ({
    type: REGISTER_SUCCESS,
    response
});

export const registerFailure = (err) => ({
    type: REGISTER_FAILURE,
    err
});
/** end of register */



/**Login */
export const login = (data) => ({
    type: LOGIN,
    data
});

export const loginSuccess = (response) => ({
    type: LOGIN_SUCCESS,
    response
});

export const loginFailure = (err) => ({
    type: LOGIN_FAILURE,
    err
});
/** end of Login */

/**Loug out user */
export const logOut = () => ({
    type: LOG_OUT
});
/**Loug out user */

/**Auto data */
export const getAutoData = () => ({
    type: AUTO_DATA
});

export const getAutoDataSuccess = (response) => ({
    type: AUTO_DATA_SUCCESS,
    response
});

export const getAutoDataFailure = (err) => ({
    type: AUTO_DATA_FAILURE,
    err
});
/**End of Auto data */

/**handle submit */
export const submitFeed = (data) => ({
    type: SUBMIT_FEED,
    data
});

export const submitFeedSuccess = (response) => ({
    type: SUBMIT_FEED_SUCCESS,
    response
});

export const submitFeedFailure = (error) => ({
    type: SUBMIT_FEED_FAILURE,
    error
});
/**end of handle submit */

/**get feed */
export const getFeed = () => ({
    type: GET_FEED,
});

export const getFeedSuccess = (response) => ({
    type: GET_FEED_SUCCESS,
    response
});

export const getFeedFailure = (error) => ({
    type: GET_FEED_FAILURE,
    error
});
/**end of get feed*/

/** APPROVE */
export const approve = (id) => ({
    type: APPROVE,
    id
});

export const approveSuccess = (response) => ({
    type: APPROVE_SUCCESS,
    response
});

export const approveFailure = (error) => ({
    type: APPROVE_FAILURE,
    error
});
/**end of approve*/

/** getDashboardFeed */
export const getDashboardFeed = () => ({
    type: 'GET_DASHBOARD_FEED',
});

export const getDashboardFeedSuccess = (response) => ({
    type: 'GET_DASHBOARD_FEED_SUCCESS',
    response
});

export const getDashboardFeedFailure = (error) => ({
    type: 'GET_DASHBOARD_FEED_FAILURE',
    error
});
/**end of getDashboardFeed*/
