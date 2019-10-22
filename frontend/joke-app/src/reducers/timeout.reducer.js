export function toggleContainer(state = {}, action) {
  switch (action.type) {
    case "GLOBAL_CONTAINER_TIMEOUT":
      return {
        ...state,
        showGlobalContainer: action.payload
      };

    case "RESPONSE_CONTAINER_TIMEOUT":
      return {
        ...state,
        showResponseContainer: action.payload
      };

    default:
      return state;
  }
}
