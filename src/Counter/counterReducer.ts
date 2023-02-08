export function counterReducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return (state = state + 1);
    case "decrement":
      return (state = state - 1);
    default:
      return state;
  }
}
