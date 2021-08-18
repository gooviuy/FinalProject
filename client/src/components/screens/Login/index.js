import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
//import Input from "../../input";
import * as loginActions from "../../../redux/actions/loginActions";

const Login = () => {
  const user = useSelector((state) => state.login.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state.login);
  const { error, errorMessage } = useSelector((state) => state.login);
  const onChange = (e) => {
    dispatch(loginActions.loginFormChange({ [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (user) {
      history.push("/landing");
    }
  }, [user]);

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(loginActions.login({ username, password }));
  };
  return (
    <section className="login-inner">
      <div className="login">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user" /> Sign into your account and try yourself.
        </p>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              onChange={onChange}
              value={username}
              name="username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
              name="password"
              minLength="6"
            />
          </div>
          <div>{error && errorMessage} </div>
          <br />
          <button onClick={onClick} className="btn btn-primary">
            Submit
          </button>
        </form>
        <p className="my-1">
          Dont you have an account ? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
