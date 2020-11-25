import {ActionType, AuthActionTypes} from "./types/actions";

type AuthState = {
  data: {
    isLogined: boolean;
    isChecked: boolean;
  }
}

const initialState: AuthState = {
  data: {
    isLogined: false,
    isChecked: false
  }
};

export default function(state: AuthState = initialState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case ActionType.SET_AUTH_STATUS:
      return {
        ...state,
        data: {...action.payload, isChecked: true}
      };
    default: return state;
  }
}
