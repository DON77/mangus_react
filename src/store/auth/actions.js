import * as types from './actionTypes'

export function login() {
  return { type: types.LOGIN_SUCCESS }
}

export function logout() {
  return { type: types.LOGOUT_SUCCESS }
}