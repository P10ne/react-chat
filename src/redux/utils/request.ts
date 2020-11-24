import axios from 'axios';
import {put} from 'redux-saga/effects';
import {AccessToken} from "../types/AccessToken";
import {getAccessToken} from "./tokens";
import API from "../../constants/api";
import {setData, stopLoading} from "../store/messages/actions";

// todo типизация методов

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
  const {startFetchingAction, stopFetchingAction, setDataAction, setFetchingErrorAction} = actionArgs;
  if (startFetchingAction) {yield put(startFetchingAction())}
  try {
    const response = yield sendSimpleRequest({
      method,
      url,
      body,
      headers
    });
    yield put(setDataAction(response));
  } catch (e) {
    console.error('Request error');
  } finally {
    if (stopFetchingAction) {yield put(stopFetchingAction())}
  }
}

export function* sendSimpleRequest(args: RequestArgs) {

  const tokenObj = {expiresIn: '0', token: 'as'}; // getAccessToken();
  return yield sendAuthorizedRequest(args, tokenObj);
}

function* sendAuthorizedRequest(args: RequestArgs, tokenObj: AccessToken) {
  const {method, url, body, headers} = args;
  return yield makeRequest({
    method,
    url,
    body,
    headers: {
      ...headers,
      'Authorization': `Bearer ${tokenObj.token}`
    }
  })
}

export function* sendUnauthorizedRequest(args: RequestArgs) {
  yield makeRequest(args);
}

function makeRequest(args: RequestArgs) {
  const {method, url, body, headers} = args;
  return axios.request({
    method,
    url,
    data: body,
    headers: {
      ...headers,
      'charset': 'utf-8',
    }
  }).then(response => response.data);
}
