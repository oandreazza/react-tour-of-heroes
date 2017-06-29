let initialState = {
  address: {
    formatted_address: null
  }
}

export default (state= initialState, action) =>{
  switch (action.type) {
    case 'ADDRESS_FULFILLED':
      return {...state, address: action.payload}
    default:
      return state;
  }
}
