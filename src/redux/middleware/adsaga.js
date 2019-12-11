import { put, takeEvery, call } from 'redux-saga/effects';
import {
    postAdSuccess,
    postAdFailure

} from '../actions/actions';
import BioApi from '../api/bioApi';

/**Handle postAd*/
export function* handlePostAd(action) {
    try{
        const response = yield call(BioApi.postAd, action.data);
        yield put(postAdSuccess(response));
    }
    catch(error){
        yield put(postAdFailure(error));
    }
}

export function* watchHandlePostAd() {
    yield takeEvery('POST_AD', handlePostAd);
}
/**End of postAd*/
