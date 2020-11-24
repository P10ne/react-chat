import createSagaMiddleware from 'redux-saga';
import {all, call} from 'redux-saga/effects';
import {watcher as messagesWatcher} from "../store/messages/watchers";
import {watcher as chatsWatcher} from '../store/chats/watchers';

export function* rootSaga() {
  yield all([
    call(messagesWatcher),
    call(chatsWatcher)
  ])
}

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;
