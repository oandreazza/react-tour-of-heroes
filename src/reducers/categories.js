const initialState = {
  categories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_FULFILLED':
      return {...state, categories: action.payload}
    default:
      return state;
  }
}
