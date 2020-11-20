import {Messages} from "./types/Messages";
import {
  ActionType,
  FetchMessages,
  FetchMessagesPayload,
  SetMessagesAction,
  SetMessagesFetchErrorAction,
  StartFetchingMessagesAction, StopFetchingMessagesAction
} from "./types/actions";
import {HttpError} from "../../types/HttpError";

export const setData = (messages: Messages): SetMessagesAction => ({
  type: ActionType.SET_DATA,
  payload: messages
});
export const setError = (error: HttpError): SetMessagesFetchErrorAction => ({
  type: ActionType.SET_ERROR,
  error
});
export const startLoading = (): StartFetchingMessagesAction => ({
  type: ActionType.START_LOADING
});
export const stopLoading = (): StopFetchingMessagesAction => ({
  type: ActionType.STOP_LOADING
});
export const getMessages = ({chatId}: FetchMessagesPayload): FetchMessages => ({
  type: ActionType.FETCH,
  payload: {
    chatId
  }
});
