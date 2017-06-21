import { combineReducers } from 'redux';
import heroesReducer from './heroes'
import heroReducer from './hero'
import notificationReducer from './notification'
import geolocationReducer from './geolocation'


export default combineReducers({
    heroesReducer,
    heroReducer,
    notificationReducer,
    geolocationReducer
});
