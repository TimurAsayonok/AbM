import {
  GET_PHOTO_REQUEST,
  GET_PHOTO_REQUEST
} from '../constants/Photo'

export function setYear(year){
  return {
    type: 'SET_YEAR',
    payload: year
  }
}
