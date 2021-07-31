import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Input from "../../input";
import * as loginActions from "../../../redux/actions/loginActions";

const Login = (props) => {
  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state.login);
  const onChange = (e) => {
    dispatch(loginActions.loginFormChange({ [e.target.name]: e.target.value }));
  };
  const onClick = () => {
    dispatch(loginActions.login({ username, password }));
  };
  return (
    <div>
      <Input onChange={onChange} value={username} name="username" />
      <Input value={password} onChange={onChange} name="password" />
      <button onClick={onClick} className="btn btn-primary">
        Submit
      </button>
      <p>
        Dont you have an account ? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
