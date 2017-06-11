import {
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  SET_YEAR
} from '../constants/Photo'

export function setYear(year){
  return {
    type: SET_YEAR,
    payload: year
  }
}

export function getPhotos(year){
  return (dispatch) => {
    dispatch({
      type: GET_PHOTO_REQUEST,
      payload: year
    });

    setTimeout(() => {
      dispatch({
        type: GET_PHOTO_SUCCESS,
        payload: [1,2,3,4,5]
      })
    }, 1000);
  }
}
