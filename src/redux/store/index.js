import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSagas from '../middleware/index';
import rootReducer from '../reducers/rootReducer';

const sagaMiddleWare = createSagaMiddleWare();
const middleWare = composeWithDevTools(applyMiddleware(sagaMiddleWare));
const store = createStore(rootReducer, middleWare);
sagaMiddleWare.run(rootSagas)

export default store;