import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import appReducer from './reducers';
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router-dom'
import {routerMiddleware} from 'react-router-redux'

const routerReduxMiddleware = routerMiddleware(browserHistory);

export default createStore(
    combineReducers({
      appReducer,
      form: formReducer
    })
  ,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    createLogger(),
    promise(),
    thunk,
    routerReduxMiddleware
  )
)
