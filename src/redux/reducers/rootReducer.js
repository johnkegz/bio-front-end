import { combineReducers } from 'redux';
import bioReducer from './bioReducer';
import singlePersonreducer from './singlePersonreducer';
import loginReducer from './loginReducer';
import autoReducer from './autoReducer';
import feedReducer from './feedReducers';
import getDashBoardFeedReducer from './getDashboardFeedReducer';
import adReducer from './adReducer';

export default combineReducers({
    bioReducer,
    singlePersonreducer,
    loginReducer,
    autoReducer,
    feedReducer,
    getDashBoardFeedReducer,
    adReducer
});