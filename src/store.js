import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import appReducer from './reducers/heroes';

export default createStore(
    appReducer
  ,
  applyMiddleware(
    createLogger(),
    promise()
  )
)
