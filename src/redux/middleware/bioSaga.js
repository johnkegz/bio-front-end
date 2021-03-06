import { put, takeEvery, call } from 'redux-saga/effects';
import {
    fetchBioSuccess, 
    fetchBioFailure,
    getOnePersonSuccess,
    getOnePersonFailure,
    handleSubmitSuccess,
    handleSubmitFailure,
    getAutoDataSuccess,
    getAutoDataFailure,
} from '../actions/actions';
import BioApi from '../api/bioApi';
import { 
    FETCH_BIO,
    FETCH_ONE_PERSON,
    HANDLE_SUBMIT,
    AUTO_DATA
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
        yield put(getOnePersonSuccess(response.data));
    }
    catch(error){
        yield put(getOnePersonFailure(error));
    }
}

export function* watchFetchOnePersonBio() {
    yield takeEvery(FETCH_ONE_PERSON, getOnePerson);
}


/**Handle submit */
export function* handleSubmit(action) {
    try{
        const response = yield call(BioApi.handleSubmit, action.data);
        yield put(handleSubmitSuccess(response));
    }
    catch(error){
        yield put(handleSubmitFailure(error));
    }
}

export function* watchhandlesubmit() {
    yield takeEvery(HANDLE_SUBMIT, handleSubmit);
}
/**End of Handle submit */

/**Get auto data */
export function* getAutoData() {
    try{
        const response = yield call(BioApi.getAutoData);
        yield put(getAutoDataSuccess(response.data));
    }
    catch(error){
        yield put(getAutoDataFailure(error));
    }
}

export function* watchAutoData() {
    yield takeEvery(AUTO_DATA, getAutoData);
}
/**End of Auto data */
