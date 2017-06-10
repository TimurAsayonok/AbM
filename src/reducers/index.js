import { combineReducers } from 'redux'
import user from './user'
import listOfGenrePage from './listOfGenrePage'

export const rootReducers = combineReducers({
  user,
  listOfGenrePage
});
