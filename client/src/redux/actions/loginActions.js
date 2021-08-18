//import client from "../../controllers";
import loginController from "../../controllers/loginController";

export const types = {
  LOGIN_CHANGE: "LOGIN_CHANGE",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
 
  LOGOUT: "LOGOUT",
};
//que sería login change?
export const loginFormChange = (payload) => {
  return { type: types.LOGIN_CHANGE, payload: payload };
};
const loginRequest = () => {
  return { type: types.LOGIN_REQUEST };
};


export const loginSucccess = (user) => {
  return { type: types.LOGIN_SUCCESS, payload: user };
};
const loginError = (payload) => {
  return { type: types.LOGIN_FAILURE, payload };
};

export const login = (payload) => async (dispatch) => {
  dispatch(loginRequest());
 
  try {
    const result = await loginController.login(payload);
    if (result.err) {
      dispatch(loginError({ message: "INVALID CREDENTIALS" }));
      return;
    }

    dispatch(loginSucccess(result.user));
 
  } catch (err) {
    dispatch(loginError());
  }
};

export const logout = () => {
  return { type: types.LOGOUT };
};
