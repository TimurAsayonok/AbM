import {
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS
} from '../constants/Photo'

const initialState = {
  year: '2016',
  photos: [],
  fetching: false
}

function ListOfGenrePageState(state = initialState, action){
  switch (action.type) {
    case GET_PHOTO_REQUEST:
      console.log('GET_PHOTO_REQUEST');
      return {...state, year: action.payload, fetching: true}
    case GET_PHOTO_SUCCESS:
      console.log('GET_PHOTO_SUCCESS');
      return {...state, photos: action.payload, fetching: false}
    default:
      return state;
  }
}

export default ListOfGenrePageState;
