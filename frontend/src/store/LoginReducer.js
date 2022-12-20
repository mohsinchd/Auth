export const LoginReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        error: "",
        user: action.payload,
      };

    case "REGISTER_ERROR":
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };

    case "LOGIN_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
        error: "",
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };

    case "RESET":
      return {
        user: null,
        loading: false,
        success: false,
        error: "",
      };

    default:
      return state;
  }
};
