import { all } from 'redux-saga/effects';
import { watchFetchBio, watchFetchOnePersonBio, watchhandlesubmit } from './bioSaga';
import { watchLogin } from './loginSaga';

export default function* rootSagas() {
    yield all([
        watchFetchBio(),
        watchFetchOnePersonBio(),
        watchhandlesubmit(),
        watchLogin()
    ]);
}