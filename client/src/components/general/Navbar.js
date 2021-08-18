import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/loginActions";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const { username } = useSelector((state) => state.login);
  const authLinks = (
    <ul>
      <div>User: </div>

      <div style={{ fontWeight: "bold" }}>{username}</div>

      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> Quiz Generator
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.login,
});

export default connect(mapStateToProps, { logout })(Navbar);
