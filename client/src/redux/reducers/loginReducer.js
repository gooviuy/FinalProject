import * as loginActions from "../actions/loginActions";

const initalState = {
  user: null,
  error: false,
  isAuthenticated: false,
  
};

export default function loginReducer(state = { initalState }, action) {
  switch (action.type) {
    case loginActions.types.LOGIN_CHANGE:
      return { ...state, ...action.payload, isAuthenticated: false };
    case loginActions.types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: false,
        isAuthenticated: true,
      };
    case loginActions.types.LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.message,
        error: true,
        isAuthenticated: false,
      };
    case loginActions.types.LOGOUT:
      return {
        ...state,
        user: null,
        error: false,
        isAuthenticated: false,
      };

    default:
      return { ...state };
  }
}
