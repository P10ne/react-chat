import {Messages} from "./types/Messages";
import {ActionType, MessagesActionTypes} from './types/actions';
import {Status} from "../../types/Status";

type MessagesState = Status & {
  data: Messages;
}

const initialState: MessagesState = {
  data: [],
  loading: false,
  error: null
};

export default function(state: MessagesState = initialState, action: MessagesActionTypes): MessagesState {
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
    default: return state;
  }
}
