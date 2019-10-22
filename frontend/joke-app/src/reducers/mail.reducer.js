export function mail(state = { mailArray: [] }, action) {
  switch (action.type) {
    case "ADD_MAIL":
      return {
        ...state,
        mailArray: [...state.mailArray, action.payload].sort((a, b) => {
          a = a.substring(a.indexOf("@") + 1);
          b = b.substring(b.indexOf("@") + 1);
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        })
      };
    case "REMOVE_MAIL":
      return {
        ...state,
        mailArray: state.mailArray.filter(
          (mail, index) => index !== action.payload
        )
      };
    default:
      return state;
  }
}
