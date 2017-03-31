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

const appReducer = combineReducers({
    heroesReducer : heroesReducer,
    heroReducer : heroReducer
});

export default appReducer;
