import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Fragment } from "react";
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
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <form className="form">
        <div className="form-group">
          <Input onChange={onChange} value={username} name="username" />
        </div>
        <div className="form-group">
          <Input value={password} onChange={onChange} name="password" />
        </div>
        <button onClick={onClick} className="btn btn-primary">
          Submit
        </button>
      </form>
      <p className="my-1">
        Dont you have an account ? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
