import {takeEvery, all, call} from 'redux-saga/effects';
import {ActionType} from "./types/actions";
import {getChats} from "./workers";

function* watchFetch() {
  yield takeEvery(ActionType.FETCH, getChats)
}

export function* watcher() {
  yield all([
    call(watchFetch)
  ])
}
