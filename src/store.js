import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import appReducer from './reducers/heroes';

export default createStore(
    combineReducers({
      appReducer,
      form: formReducer
    })
  ,
  applyMiddleware(
    createLogger(),
    promise()
  )
)
