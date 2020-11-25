import createSagaMiddleware from 'redux-saga';
import {all, call} from 'redux-saga/effects';
import {watcher as messagesWatcher} from "../store/messages/watchers";
import {watcher as chatsWatcher} from '../store/chats/watchers';
import {watcher as profileWatcher} from '../store/profile/watchers';

export function* rootSaga() {
  yield all([
    call(messagesWatcher),
    call(chatsWatcher),
    call(profileWatcher)
  ])
}

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;
