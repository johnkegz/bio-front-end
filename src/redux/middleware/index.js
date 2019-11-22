import { all } from 'redux-saga/effects';
import { 
    watchFetchBio, 
    watchFetchOnePersonBio, 
    watchhandlesubmit, 
    watchAutoData,
} from './bioSaga';
import { watchLogin, watchLoginOut } from './loginSaga';
import { watchHandleFeed, watchHandleGetFeed, watchHandleApprove } from './feedSaga';

export default function* rootSagas() {
    yield all([
        watchFetchBio(),
        watchFetchOnePersonBio(),
        watchhandlesubmit(),
        watchLogin(),
        watchLoginOut(),
        watchAutoData(),
        watchHandleFeed(),
        watchHandleGetFeed(),
        watchHandleApprove(),
    ]);
}