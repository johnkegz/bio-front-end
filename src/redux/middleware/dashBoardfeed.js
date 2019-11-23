import { put, takeEvery, call } from 'redux-saga/effects';
import {
    getDashboardFeedSuccess,
    getDashboardFeedFailure

} from '../actions/actions';
import BioApi from '../api/bioApi';

/**Handle getDashboardFeed*/
export function* handleGetDashboardFeed() {
    try{
        const response = yield call(BioApi.getDashboardFeed);
        yield put(getDashboardFeedSuccess(response));
    }
    catch(error){
        yield put(getDashboardFeedFailure(error));
    }
}

export function* watchHandleHandleGetDashboardFeed() {
    yield takeEvery('GET_DASHBOARD_FEED', handleGetDashboardFeed);
}
/**End of getDashboardFeed*/
