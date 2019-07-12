import { all } from 'redux-saga/effects';
import { watchFetchBio, watchFetchOnePersonBio, watchhandlesubmit } from './bioSaga';

export default function* rootSagas() {
    yield all([
        watchFetchBio(),
        watchFetchOnePersonBio(),
        watchhandlesubmit()
    ]);
}