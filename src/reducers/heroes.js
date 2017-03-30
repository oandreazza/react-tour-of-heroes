let initialState = {
  heroes: []
}

function heroesReducer(state = initialState, action){
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

export default heroesReducer;
