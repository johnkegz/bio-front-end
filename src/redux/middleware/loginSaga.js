import { put, takeEvery, call } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';
import BioApi from '../api/bioApi';
import {
    loginSuccess,
    loginFailure,
    registerSuccess,
    registerFailure
} from '../actions/actions';
import { 
    LOGIN, LOG_OUT, REGISTER
} from '../actions/actionTypes';
import setAuthToken from '../../utils/setAuthToken';

/**Register*/
export function* handleRegister(action) {
    try{
        const response = yield call(BioApi.register, action.data);
        yield put(registerSuccess(response));
    }
    catch(error){
       
        yield put(registerFailure(error));
    }
}

export function* watchRegister() {
    yield takeEvery(REGISTER, handleRegister);
}
/** end of Register */

/**Login */
export function* login(action) {
    try{
        const response = yield call(BioApi.login, action.data);
        if(response.data.token === undefined){
            console.log("response ::::::: if", response.data.token);
            return false
        }
        else{
            console.log("response ::::::: else", response.data.token);
            localStorage.setItem('jwtToken', response.data.token)
            setAuthToken(response.data.token);
            const decoded = jwt_decode(response.data.token)
            yield put(loginSuccess(decoded));
        }
        
    }
    catch(error){
        console.log("register error", error);
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