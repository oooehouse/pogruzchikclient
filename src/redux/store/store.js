import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all } from 'redux-saga/effects';

import rootReducer from '../reducer';
import userSaga from '../user/saga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([...userSaga]);
}

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);
sagaMiddleware.run(rootSaga);

export default store;
