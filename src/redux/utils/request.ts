import axios, {AxiosResponse} from 'axios';
import {put} from 'redux-saga/effects';
import {AccessToken} from "../types/AccessToken";
import {getAccessToken, getRefreshToken, setAccessToken, setRefreshToken} from "./tokens";
import API from "../../constants/api";
import {getFingerPrint} from "./fingerPrint";
import {RefreshToken} from "../types/RefreshToken";
import {logout} from "../store/auth/actions";

// todo типизация методов, обработка ошибок

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

type RequestArgs = {
  method: RequestMethod,
  url: string;
  body?: Object;
  headers?: Object;
}
type ActionArgs = {
  startFetchingAction?: any,
  stopFetchingAction?: any,
  setDataAction: any,
  setFetchingErrorAction?: any
}

export function* sendRequest(requestArgs: RequestArgs, actionArgs: ActionArgs) {
  const {method, url, body, headers} = requestArgs;
  const {startFetchingAction, stopFetchingAction, setDataAction} = actionArgs;
  if (startFetchingAction) {yield put(startFetchingAction())}
  try {
    const response = yield sendAuthorizedRequest({
      method,
      url,
      body,
      headers
    });
    yield put(setDataAction(response.data));
  } catch (e) {
    console.error('Request error');
  } finally {
    if (stopFetchingAction) {yield put(stopFetchingAction())}
  }
}

function* sendAuthorizedRequest(args: RequestArgs): any {
  // todo проверка на expires токена
  const TIME_BEFORE_TOKEN_EXPIRED = 10000;
  const {method, url, body, headers} = args;
  const accessToken = getAccessToken();
  const tokenExpiresAt = accessToken.expiresAt;
  const isTokenExpired = Date.now() > tokenExpiresAt - TIME_BEFORE_TOKEN_EXPIRED;
  if (!isTokenExpired) {
    return yield makeRequest({
      method,
      url,
      body,
      headers: {
        ...headers,
        'Authorization': `Bearer ${accessToken.token}`
      }
    })
  } else {
    const success = yield refresh();
    if (success) {
      return yield sendAuthorizedRequest(args);
    }
  }
}

export async function sendUnauthorizedRequest(args: RequestArgs) {
  return await makeRequest(args);
}

async function makeRequest(args: RequestArgs) {
  const {method, url, body, headers} = args;
  const result =  await axios.request({
    method,
    url,
    data: body,
    headers: {
      ...headers,
      'charset': 'utf-8',
    }
  }).catch(error => error.response);
  return result;
}

type RefreshResponse = {
  accessToken: AccessToken,
  refreshToken: RefreshToken
}

export function* refresh() {
  const refreshToken = getRefreshToken();
  const fingerPrint = yield getFingerPrint();
  const requestBody: {refreshToken: string, fingerPrint: string} = {
    refreshToken: refreshToken,
    fingerPrint
  };
  let response: AxiosResponse<RefreshResponse> | null = null;
  try {
    response = yield sendUnauthorizedRequest({
      method: RequestMethod.POST,
      url: API.LOGIN_REFRESH,
      body: requestBody
    });
  } catch (e) {console.error('refresh error: ', response);}

  const refreshResponse = response as AxiosResponse<RefreshResponse>;
  if (refreshResponse.status === 401) {
    yield put(logout());
    return false;
  } else {
    const {accessToken, refreshToken} = refreshResponse.data;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    return true;
  }
}

export const isRequestSuccess = (response: AxiosResponse): boolean => {
  return response.status === 200;
};
