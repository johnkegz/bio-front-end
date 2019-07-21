import { all } from 'redux-saga/effects';
import { watchFetchBio, watchFetchOnePersonBio, watchhandlesubmit } from './bioSaga';
import { watchLogin, watchLoginOut } from './loginSaga';

export default function* rootSagas() {
    yield all([
        watchFetchBio(),
        watchFetchOnePersonBio(),
        watchhandlesubmit(),
        watchLogin(),
        watchLoginOut()
    ]);
}