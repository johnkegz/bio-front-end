import { 
    FETCH_BIO,
    FETCH_BIO_SUCCESS, 
    FETCH_BIO_FAILURE,
    FETCH_ONE_PERSON,
    FETCH_ONE_PERSON_SUCCESS,
    FETCH_ONE_PERSON_FAILURE,

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