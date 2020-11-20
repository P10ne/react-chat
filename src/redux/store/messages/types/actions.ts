import {Messages} from "./Messages";
import {
  FetchAction,
  SetDataAction,
  SetFetchingErrorAction,
  StartFetchingAction,
  StopFetchingAction
} from "../../../types/Actions";

export enum ActionType {
  START_LOADING = `MESSAGES/START_LOADING`,
  STOP_LOADING = `MESSAGES/STOP_LOADING`,
  SET_DATA = `MESSAGES/SET_DATA`,
  SET_ERROR = `MESSAGES/SET_ERROR`,
  FETCH = 'MESSAGES/FETCH'
}

export type StartFetchingMessagesAction =  StartFetchingAction<ActionType.START_LOADING>;
export type StopFetchingMessagesAction = StopFetchingAction<ActionType.STOP_LOADING>;
export type SetMessagesAction = SetDataAction<ActionType.SET_DATA, Messages>;
export type SetMessagesFetchErrorAction = SetFetchingErrorAction<ActionType.SET_ERROR>;
export type FetchMessagesPayload = {
  chatId: number;
}
export type FetchMessages = FetchAction<ActionType.FETCH, FetchMessagesPayload>;

export type MessagesActionTypes =
  | StartFetchingMessagesAction
  | StopFetchingMessagesAction
  | SetMessagesAction
  | SetMessagesFetchErrorAction
  | FetchMessages;
