import { combineReducers } from 'redux';

let initialHeroesState = {
  heroes: []
}

const heroesReducer = (state = initialHeroesState, action) => {
  switch (action.type) {
    case "FETCH_HEROES_PENDING":
      return {...state}
    case "FETCH_HEROES_FULFILLED":
      let heroes = action.payload;
      return {...state,heroes}
    default:
      return state;
  }
}

let initialHeroState = {
  hero: {
    name: "",
    skills:{
      fire: 0,
      freezing: 0,
      invisibility: 0,
      speed: 0
    }
  }
}

const heroReducer = (state = initialHeroState, action) => {
  switch (action.type) {
    case "FETCH_HERO":
      return {...state}
    case "FETCH_HERO_FULFILLED":
      let hero = action.payload;
      return {...state,hero}
    case "@@redux-form/CHANGE":
      const field = action.meta.field.split('.').pop()
      return {hero:{name: state.hero.name,skills:{ ...state.hero.skills,[field]: action.payload}}}
    case "NEW_HERO":
      return {...initialHeroState}
    default:
      return state;
  }
}

let initialNotificationState = {
  message: "",
  type: "warning",
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

export default combineReducers({
    heroesReducer : heroesReducer,
    heroReducer : heroReducer,
    notificationReducer: notificationReducer,
});
