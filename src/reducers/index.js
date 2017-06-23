import { combineReducers } from 'redux';
import heroesReducer from './heroes'
import heroReducer from './hero'
import notificationReducer from './notification'
import geolocationReducer from './geolocation'
import loadingReducer from './loading'


export default combineReducers({
    heroesReducer,
    heroReducer,
    notificationReducer,
    geolocationReducer,
    loadingReducer
});
