import {put} from 'redux-saga/effects';
import {LoginFetchAction} from "./types/actions";
import {RequestMethod, sendUnauthorizedRequest} from "../../utils/request";
import {getFingerPrint} from "../../utils/fingerPrint";
import {setAuthStatus, startLoading, stopLoading} from "./actions";
import API from "../../../constants/api";
import {AccessToken} from "../../types/AccessToken";
import {RefreshToken} from "../../types/RefreshToken";
import {User} from "../../types/User";
import {clearTokens, setAccessToken, setRefreshToken} from "../../utils/tokens";

type LoginResponse = {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
  user: User;
}

export function* login({payload: {login, password}}: LoginFetchAction) {
  yield put(startLoading());

  try {
    const fingerPrint = yield getFingerPrint();
    const response = yield sendUnauthorizedRequest({
      method: RequestMethod.POST,
      url: API.LOGIN_LOGIN,
      body: {login, password, fingerPrint}
    });
    const {accessToken, refreshToken} = response.data as LoginResponse;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);

    yield put(setAuthStatus({isLogined: true}));

    //todo Обработать ошибку
  } catch (e) {
    console.error(e);
  } finally {
    yield put(stopLoading());
  }
}

export function* logout() {
  console.log('logout');
  clearTokens();
  yield put(setAuthStatus({isLogined: false}));
}