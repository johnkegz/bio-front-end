import { put, takeEvery, call } from 'redux-saga/effects';
import {
    fetchBioSuccess, 
    fetchBioFailure
} from '../actions/actions';
import BioApi from '../api/bioApi';
import { 
    FETCH_BIO
} from '../actions/actionTypes';

export function* fetchBio(action) {
   
    try{
        const response = yield call(BioApi.fetchBio);
        yield put(fetchBioSuccess(response.data));
    }
    catch(error){
        console.log('saga error ++++++++++++++++');
        yield put(fetchBioFailure(error));
    }
}

export function* watchFetchBio() {
    yield takeEvery(FETCH_BIO, fetchBio);
}
