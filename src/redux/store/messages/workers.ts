import {put} from 'redux-saga/effects';
import {startLoading} from "./actions";
import {FetchMessages} from "./types/actions";

export function* getMessages({payload: {chatId}}: FetchMessages) {
  yield put(startLoading());
}
