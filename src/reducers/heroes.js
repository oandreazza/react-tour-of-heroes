let initialState = {
  heroes: []
}

export default (state = initialState, action) => {
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
