import { STORAGE_KEYS } from '../constants/app.constants';

export default class LocalStorageService {
  static get user() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)) || {};
  }

  static set user(user) {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }

  static get isAuthenticated() {
    return this.user?.isAuthenticated || false;
  }

  static set isAuthenticated(isAuthenticated) {
    const { user } = this;
    user.isAuthenticated = isAuthenticated;
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }

  static get accessToken() {
    return this.user.accessToken;
  }

  static set accessToken(accessToken) {
    const { user } = this;
    user.accessToken = accessToken;
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }

  static get refreshToken() {
    return this.user.refreshToken;
  }

  static set refreshToken(refreshToken) {
    const { user } = this;
    user.refreshToken = refreshToken;
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }

  static get expirationTime() {
    return this.user.expirationTime;
  }

  static set expirationTime(expirationTime) {
    const { user } = this;
    user.expirationTime = expirationTime;
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }

  static get role() {
    return this.user.role;
  }

  static set role(role) {
    const { user } = this;
    user.role = role;
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }

  static clear() {
    localStorage.clear();
  }
}
