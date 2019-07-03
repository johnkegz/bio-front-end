import { put, takeEvery, call } from 'redux-saga/effects';
import {
    fetchBioSuccess, 
    fetchBioFailure,
    getOnePersonSuccess,
    getOnePersonFailure
} from '../actions/actions';
import BioApi from '../api/bioApi';
import { 
    FETCH_BIO,
    FETCH_ONE_PERSON
} from '../actions/actionTypes';

/**Fetch all */
export function* fetchBio() {
   
    try{
        const response = yield call(BioApi.fetchBio);
        yield put(fetchBioSuccess(response.data));
    }
    catch(error){
        yield put(fetchBioFailure(error));
    }
}

export function* watchFetchBio() {
    yield takeEvery(FETCH_BIO, fetchBio);
}


/**Fetch One */
export function* getOnePerson(action) {
    try{
        const response = yield call(BioApi.getOnePerson, action.id);
        console.log('saga +++ ++ response', response);
        yield put(getOnePersonSuccess(response.data));
    }
    catch(error){
        console.log('errrr +++ ++ ', error);
        yield put(getOnePersonFailure(error));
    }
}

export function* watchFetchOnePersonBio() {
    yield takeEvery(FETCH_ONE_PERSON, getOnePerson);
}
