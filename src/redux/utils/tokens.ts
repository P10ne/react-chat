import {AccessToken} from "../types/AccessToken";
import {LOCAL_STORAGE_KEYS} from "../../constants/localStorageKeys";
import {RefreshToken} from "../types/RefreshToken";

export function getAccessToken(): AccessToken {
  const stringTokenObject = localStorage.getItem(LOCAL_STORAGE_KEYS.accessToken);
  try {
    if (stringTokenObject) {
      const token: AccessToken = JSON.parse(stringTokenObject);
      return token;
    }
    return {
      expiresAt: 0,
      token: ''
    }
  } catch (e) {
    // todo Обработка ошибки получения токена
    console.error('Ошибка при получении токена из localStorage');
    return {
      expiresAt: 0,
      token: ''
    }
  }
}
export function setAccessToken(token: AccessToken): void {
  localStorage.setItem(LOCAL_STORAGE_KEYS.accessToken, JSON.stringify(token));
}
export function getRefreshToken(): string {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.refreshToken);
  if (token) {
    return JSON.parse(token) || '';
  }
  return '';
}
export function setRefreshToken(token: RefreshToken): void {
  localStorage.setItem(LOCAL_STORAGE_KEYS.refreshToken, JSON.stringify(token));
}

export function clearTokens(): void {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.accessToken);
  localStorage.removeItem(LOCAL_STORAGE_KEYS.refreshToken);
}
