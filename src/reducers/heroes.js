import { combineReducers } from 'redux';

let initialHeroesState = {
  heroes: []
}

const heroesReducer = (state = initialHeroesState, action) => {
  switch (action.type) {
    case "FETCH_HEROES_PENDING":
      return {...state}
    case "FETCH_HEROES_FULFILLED":
      let heroes = action.payload.data.data;
      return {...state,heroes}
    default:
      return state;
  }
}

let initialHeroState = {
  hero: {
    name: ""
  }
}

const heroReducer = (state = initialHeroState, action) => {
  switch (action.type) {
    case "FETCH_HERO":
      return {...state}
    case "FETCH_HERO_FULFILLED":
      let hero = action.payload.data.data;
      return {...state,hero}
    default:
      return state;
  }
}

let initialNotificationState = {
  message: "",
  type: "warning"
}
const notificationReducer = (state= initialNotificationState, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      let message = action.payload.message;
      let type = action.payload.type;
      return {...state, message, type}
    case "DISMISS_NOTIFICATION":
      return state;
    default:
      return state;
  }
}

let initialChartState = {
  dataChart: [0,0,0,0],
}
const heroChartReducer = (state= initialChartState, action ) => {
  switch (action.type) {
    case "@@redux-form/CHANGE":
      let value = + action.payload
      let chartValue = [value,21,32,12]
      return {...state, dataChart:chartValue}
    default:
      return state;

  }
}

const appReducer = combineReducers({
    heroesReducer : heroesReducer,
    heroReducer : heroReducer,
    notificationReducer: notificationReducer,
    heroChartReducer: heroChartReducer
});

export default appReducer;
