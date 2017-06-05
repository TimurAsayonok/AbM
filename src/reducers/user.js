import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

const initialState = JSON.parse(window.localStorage.getItem('site_login')) || {}

function UserState(state = initialState, action){
  switch (action.type) {
    case LOGIN_REQUEST:
      //TODO
      break;
    case LOGIN_SUCCESS:
      //TODO
      break;
    case LOGIN_ERROR:
      //TODO
      break;
    case LOGOUT_SUCCESS:
      //TODO
      break;
    default:
      return state;
  }
}

export default UserState;
