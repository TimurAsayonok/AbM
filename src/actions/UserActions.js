import {
  // LOGIN_REQUEST,
  // LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

export function login(data) {
  console.log(data);
  return {
    type: LOGIN_SUCCESS
  }
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  }
}
