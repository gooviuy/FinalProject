import loginController from "../../controllers/loginController";

export const types = {
  LOGIN_CHANGE: "LOGIN_CHANGE",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT: "LOGOUT"
};

export const loginFormChange = (payload) => {
  return { type: types.LOGIN_CHANGE, payload: payload };
};
const loginRequest = () => {
  return { type: types.LOGIN_REQUEST };
};
const loginSucccess = () => {
  return { type: types.LOGIN_SUCCESS };
};
const loginError = () => {
  return { type: types.LOGIN_FAILURE };
};

export const login = (payload) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const result = await loginController.login(payload);
    dispatch(loginSucccess());
  } catch (err) {
    dispatch(loginError());
  }
};

// Logout
//export const logout = () => ({ type: types.LOGOUT });