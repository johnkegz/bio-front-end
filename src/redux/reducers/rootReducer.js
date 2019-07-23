import { combineReducers } from 'redux';
import bioReducer from './bioReducer';
import singlePersonreducer from './singlePersonreducer';
import loginReducer from './loginReducer';
import autoReducer from './autoReducer';

export default combineReducers({
    bioReducer,
    singlePersonreducer,
    loginReducer,
    autoReducer
});