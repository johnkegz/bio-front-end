import { put, takeEvery, call } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';
import BioApi from '../api/bioApi';
import {
    loginSuccess,
    loginFailure
} from '../actions/actions';
import { 
    LOGIN, LOG_OUT 
} from '../actions/actionTypes';
import setAuthToken from '../../utils/setAuthToken';

/**Login */
export function* login(action) {
    try{
        const response = yield call(BioApi.login, action.data);
        localStorage.setItem('jwtToken', response.data.token)
        setAuthToken(response.data.token);
        const decoded = jwt_decode(response.data.token)
        yield put(loginSuccess(decoded));
    }
    catch(error){
        yield put(loginFailure(error));
    }
}

export function* watchLogin() {
    yield takeEvery(LOGIN, login);
}
/** end of Login */

/**LOGOUT */
export function* logOut() {
    try{
        localStorage.removeItem('jwtToken')
        setAuthToken(false)
        yield put(loginSuccess(0));
    }
    catch(error){
        yield put(loginFailure(error));
    }
}

export function* watchLoginOut() {
    yield takeEvery(LOG_OUT, logOut);
}
/**END OF LOGOUT */