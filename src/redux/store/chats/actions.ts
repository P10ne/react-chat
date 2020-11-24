import {
  ActionType,
  ClearSelectedChatAction,
  FetchChatsAction,
  FetchChatsPayload,
  SetChatsAction,
  SetChatsFetchErrorAction,
  SetSelectedChatAction,
  SetSelectedChatPayload,
  StartFetchingChatsAction,
  StopFetchingChatsAction,
} from "./types/actions";
import {HttpError} from "../../types/HttpError";
import {Chats} from "./types/Chats";

export const setData = (chats: Chats): SetChatsAction => ({
  type: ActionType.SET_DATA,
  payload: chats
});
export const setError = (error: HttpError): SetChatsFetchErrorAction => ({
  type: ActionType.SET_ERROR,
  error
});
export const startLoading = (): StartFetchingChatsAction => ({
  type: ActionType.START_LOADING
});
export const stopLoading = (): StopFetchingChatsAction => ({
  type: ActionType.STOP_LOADING
});
export const fetchChats = ({searchQuery}: FetchChatsPayload = {}): FetchChatsAction => ({
  type: ActionType.FETCH,
  payload: {
    searchQuery
  }
});
export const setSelectedChat = (chat: SetSelectedChatPayload): SetSelectedChatAction => ({
  type: ActionType.SET_SELECTED,
  payload: chat
});
export const clearSelected = (): ClearSelectedChatAction => ({
  type: ActionType.CLEAR_SELECTED
});
