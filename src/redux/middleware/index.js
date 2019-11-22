import { all } from 'redux-saga/effects';
import { 
    watchFetchBio, 
    watchFetchOnePersonBio, 
    watchhandlesubmit, 
    watchAutoData,
} from './bioSaga';
import { watchLogin, watchLoginOut, watchRegister } from './loginSaga';
import { watchHandleFeed, watchHandleGetFeed, watchHandleApprove } from './feedSaga';

export default function* rootSagas() {
    yield all([
        watchFetchBio(),
        watchFetchOnePersonBio(),
        watchhandlesubmit(),
        watchRegister(),
        watchLogin(),
        watchLoginOut(),
        watchAutoData(),
        watchHandleFeed(),
        watchHandleGetFeed(),
        watchHandleApprove(),
    ]);
}