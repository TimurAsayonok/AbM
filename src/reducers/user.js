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
      console.log('LOGIN_REQUEST');
      return {...state}
    case LOGIN_SUCCESS:
      console.log('LOGIN_SUCCESS');
      return {...state, name: action.payload.name, isAuthenticated: action.payload.isAuthenticated}
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
