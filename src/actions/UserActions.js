import {
  LOGIN_REQUEST,
  // LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

import {
  ROUTING
} from '../constants/Routing'

export function login(data) {
  return (dispatch) => {
    console.log(data);

    dispatch({
      type: LOGIN_REQUEST
    });

    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          name: data.name,
          isAuthenticated: true
        }
      })
      //after login success go to middleware and doing redirect to another page
      dispatch({
        type: ROUTING,
        payload: {
          method: 'replace', //или, например, replace
          nextUrl: '/admin'
        }
      })
    }, 2000);
  }
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  }
}
