import { put, takeEvery, call } from 'redux-saga/effects';
import BioApi from '../api/bioApi';
import {
    loginSuccess,
    loginFailure
} from '../actions/actions';
import { 
    LOGIN   
} from '../actions/actionTypes';

/**Login */
export function* login(action) {
    try{
        const response = yield call(BioApi.login, action.data);
        yield put(loginSuccess(response.data));
    }
    catch(error){
        yield put(loginFailure(error));
    }
}

export function* watchLogin() {
    yield takeEvery(LOGIN, login);
}
/** end of Login */