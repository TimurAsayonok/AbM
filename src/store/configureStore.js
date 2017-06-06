import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { rootReducers } from '../reducers'
import { redirect } from '../middlewares/redirect'

export default function configureStore() {
  const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(createLogger()),
    applyMiddleware(redirect) //added custom redirect middleware
  )(createStore)(rootReducers)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').rootReducers;
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
}
