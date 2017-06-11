import {
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  SET_YEAR
} from '../constants/Photo'

const initialState = {
  year: '2016',
  photos: []
}

function ListOfGenrePageState(state = initialState, action){
  switch (action.type) {
    case GET_PHOTO_REQUEST:
      console.log('GET_PHOTO_REQUEST');
      return {...state}
    case GET_PHOTO_SUCCESS:
      console.log('GET_PHOTO_SUCCESS');
      return {...state}
    case SET_YEAR:
      console.log('SET_YEAR');
      return {...state, year: action.payload}
    default:
      return state;
  }
}

export default ListOfGenrePageState;
