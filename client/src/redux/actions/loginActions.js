import client from "../../controllers";
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
const loginSucccess = (user) => {
  return { type: types.LOGIN_SUCCESS,payload:user };
};
const loginError = () => {
  return { type: types.LOGIN_FAILURE };
};

export const login = (payload) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const s = client;
    debugger;
    const result = await loginController.login(payload);
  // const result = await client.post("login/",payload);
 /* const result = await fetch("http://localhost:8000/login", {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(payload), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  })*/
   debugger;
    dispatch(loginSucccess(result.user));
  } catch (err) {
    debugger;
    dispatch(loginError());
  }
};

// Logout
//export const logout = () => ({ type: types.LOGOUT });