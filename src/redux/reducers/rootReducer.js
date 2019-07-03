import { combineReducers } from 'redux';
import bioReducer from './bioReducer';
import singlePersonreducer from './singlePersonreducer';

export default combineReducers({
    bioReducer,
    singlePersonreducer
});