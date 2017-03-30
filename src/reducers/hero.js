let initialState = {
  hero: {
    name: ""
  }
}

function heroReducer(state = initialState, action){
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

export default heroReducer;
