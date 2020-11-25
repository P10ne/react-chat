import {
  FetchAction,
  SetDataAction,
  SetFetchingErrorAction,
  StartFetchingAction,
  StopFetchingAction
} from "../../../types/Actions";

export enum ActionType {
  SET_AUTH_STATUS = 'SET_AUTH_STATUS'
}

export type SetAuthStatusActionPayload = {
  isLogined: boolean;
}
export type SetAuthStatusAction = SetDataAction<ActionType.SET_AUTH_STATUS, SetAuthStatusActionPayload>;

export type AuthActionTypes =
  | SetAuthStatusAction;
