let initialState = {
  hero: {
    name: "",
    formatted_address: null,
    skills:{
      fire: 0,
      freezing: 0,
      invisibility: 0,
      speed: 0
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_HERO":
      return {...state}
    case "FETCH_HERO_FULFILLED":
      let hero = action.payload;
      return {...state,hero}
    // case "@@redux-form/CHANGE":
    //   const field = action.meta.field.split('.').pop()
    //   const hero2 = {...state.hero,skills:{...state.hero.skills,[field]: 2}}
    //   return {...state,hero2}
    default:
      return state;
  }
}
