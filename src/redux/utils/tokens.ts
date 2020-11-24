import {AccessToken} from "../types/AccessToken";
import {LOCAL_STORAGE_KEYS} from "../../constants/localStorageKeys";

export function getAccessTokenExpiresIn(): string {
  const token: AccessToken = getAccessToken();
  return token.expiresIn;
}
export function getAccessTokenValue(): string {
  const token: AccessToken = getAccessToken();
  return token.token;
}

export function getAccessToken(): AccessToken {
  const stringTokenObject = localStorage.getItem(LOCAL_STORAGE_KEYS.accessToken);
  try {
    if (stringTokenObject) {
      const token: AccessToken = JSON.parse(stringTokenObject);
      return token;
    }
    return {
      expiresIn: '0',
      token: ''
    }
  } catch (e) {
    // todo Обработка ошибки получения токена
    console.error('Ошибка при получении токена из localStorage');
    return {
      expiresIn: '0',
      token: ''
    }
  }
}
