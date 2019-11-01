import { put, takeEvery, call } from 'redux-saga/effects';
import {
    submitFeedSuccess,
    submitFeedFailure
} from '../actions/actions';
import BioApi from '../api/bioApi';
import { 
    SUBMIT_FEED
} from '../actions/actionTypes';


/**Handle feed*/
export function* handleFeed(action) {
    try{
        const response = yield call(BioApi.submitFeed, action.data);
        yield put(submitFeedSuccess(response));
    }
    catch(error){
        yield put(submitFeedFailure(error));
    }
}

export function* watchHandleFeed() {
    yield takeEvery(SUBMIT_FEED, handleFeed);
}
/**End of Handle feed*/
