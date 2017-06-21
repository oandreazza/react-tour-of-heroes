let initialNotificationState = {
  message: "",
  type: "warning",
}

export default (state= initialNotificationState, action) => {
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
