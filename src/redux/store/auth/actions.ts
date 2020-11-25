import {ActionType, SetAuthStatusAction, SetAuthStatusActionPayload,} from "./types/actions";

export const setAuthStatus = (authData: SetAuthStatusActionPayload): SetAuthStatusAction => ({
  type: ActionType.SET_AUTH_STATUS,
  payload: authData
});
