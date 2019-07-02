import { 
    FETCH_BIO,
    FETCH_BIO_SUCCESS, 
    FETCH_BIO_FAILURE 
} from './actionTypes';

export const fetchBio = id => ({
    type: FETCH_BIO,
    id
});

export const fetchBioSuccess = (bio) => ({
    type: FETCH_BIO_SUCCESS,
    bio
});

export const fetchBioFailure = (error) => ({
    type: FETCH_BIO_FAILURE,
    error
});
