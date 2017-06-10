import {
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS
} from '../constants/Photo'

const initialState = {}

function ListOfGenrePageState(state = initialState, action){
  switch (action.type) {
    case GET_PHOTO_REQUEST:
      console.log('GET_PHOTO_REQUEST');
      return {...state}
    case GET_PHOTO_SUCCESS:
      console.log('GET_PHOTO_SUCCESS');
      return {...state}
    default:
      return state;
  }
}

export default ListOfGenrePageState;
