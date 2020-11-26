import {ActionType, AuthActionTypes} from "./types/actions";
import {Status} from "../../types/Status";

type AuthState = Status & {
  data: {
    isLogined: boolean;
    isChecked: boolean;
  }
}

const initialState: AuthState = {
  loading: false,
  error: null,
  data: {
    isLogined: false,
    isChecked: false
  }
};

export default function(state: AuthState = initialState, action: AuthActionTypes): AuthState {
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
    case ActionType.SET_ERROR:
      return {
        ...state,
        error: action.error
      };
    case ActionType.SET_AUTH_STATUS:
      return {
        ...state,
        data: {...action.payload, isChecked: true}
      };
    default: return state;
  }
}
