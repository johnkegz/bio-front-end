import { all } from 'redux-saga/effects';
import { watchFetchBio } from './bioSaga';

export default function* rootSagas() {
    console.log('all');
    yield all([
        watchFetchBio(),
    ]);
}