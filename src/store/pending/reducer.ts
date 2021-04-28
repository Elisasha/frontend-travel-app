export function pendingReducer(state = true, action: any) {
  switch (action.type) {
    case "setPending":
      return action.payload;
    default:
      return state;
  }
}
