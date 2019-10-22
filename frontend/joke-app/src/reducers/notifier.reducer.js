export function notifier(state = {}, action) {
  switch (action.type) {
    case "MAIL_SUCCESS":
      return {
        ...state,
        success: true,
        message: "Mail sent successfully!",
        bgColor: "#28a74599",
        txtColor: "dark",
        class: "",
        content: action.payload
      };
    case "MAIL_FAILURE":
      return {
        ...state,
        success: false,
        message: "Could not send mail, try again",
        bgColor: "",
        txtColor: "#3c3636",
        class: "error-container",
        content: action.payload
      };
    case "ZERO_ITEMS":
      return {
        ...state,
        success: false,
        message: "Add at least one mail",
        bgColor: "#a4a4a4de",
        txtColor: "rgba(31, 13, 13, 0.73);",
        class: "",
        content: action.payload
      };
    default:
      return state;
  }
}
