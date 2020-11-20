import createSagaMiddleware from 'redux-saga';
import {all, call} from 'redux-saga/effects';
import {watcher} from "../store/messages/watchers";

export function* rootSaga() {
  yield all([
    call(watcher)
  ])
}

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;
