const initialState = {
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {...state, loading: action.payload}
    default:
      return state;
  }
}
