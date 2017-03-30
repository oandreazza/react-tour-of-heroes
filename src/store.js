import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import heroesReducer from './reducers/heroes';
import heroReducer from './reducers/hero';

export default createStore(
  combineReducers({
      heroesReducer,
      heroReducer
  })
  ,
  applyMiddleware(
    createLogger(),
    promise()
  )
)
