import {Status} from "../../types/Status";
import {Chats} from "./types/Chats";
import {ActionType, ChatsActionTypes} from "./types/actions";
import {Chat} from './types/Chat';

type ChatsState = Status & {
  data: Chats,
  active: Chat | null
}

const initialState: ChatsState = {
  loading: false,
  error: null,
  data: [],
  active: null
};

export default function(state: ChatsState = initialState, action: ChatsActionTypes): ChatsState {
  switch (action.type) {
    case ActionType.START_LOADING:
      return {
        ...state,
        loading: true
      };
    case ActionType.STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case ActionType.SET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        error: action.error
      };
    case ActionType.SET_SELECTED:
      return {
        ...state,
        active: action.payload
      };
    case ActionType.CLEAR_SELECTED:
      return {
        ...state,
        active: null
      };
    default: return state;
  }
}
