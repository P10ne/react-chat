import {HttpError} from "./HttpError";

export type StartFetchingAction<T> = {
  type: T;
};
export type StopFetchingAction<T> = {
  type: T;
};
export type SetDataAction<T, U> = {
  type: T;
  payload: U;
};
export type SetFetchingErrorAction<T, U = HttpError> = {
  type: T;
  error: U;
};
export type FetchAction<T, U = any> = {
  type: T;
  payload: U;
};
