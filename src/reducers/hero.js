let initialState = {
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

export default (state = initialState, action) => {
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
      return {...initialState}
    default:
      return state;
  }
}
