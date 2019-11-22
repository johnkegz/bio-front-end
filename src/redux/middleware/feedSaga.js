import { put, takeEvery, call } from 'redux-saga/effects';
import {
    submitFeedSuccess,
    submitFeedFailure,
    getFeedSuccess,
    getFeedFailure,
    approveSuccess,
    approveFailure

} from '../actions/actions';
import BioApi from '../api/bioApi';
import { 
    SUBMIT_FEED,
    GET_FEED,
    APPROVE
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


/**Handle get feed*/
export function* handleGetFeed() {
    try{
        const response = yield call(BioApi.getFeed);
        yield put(getFeedSuccess(response));
    }
    catch(error){
        yield put(getFeedFailure(error));
    }
}

export function* watchHandleGetFeed() {
    yield takeEvery(GET_FEED, handleGetFeed);
}
/**End of Handle get feed*/


/**Handle approve*/
export function* handleApprove(action) {
    try{
        const response = yield call(BioApi.approve, action.id);
        yield put(approveSuccess(response));
    }
    catch(error){
        yield put(approveFailure(error));
    }
}

export function* watchHandleApprove() {
    yield takeEvery(APPROVE, handleApprove);
}
/**End of approve*/
