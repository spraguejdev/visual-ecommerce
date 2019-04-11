import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  // Look at the value of auth, and show appropiate button
  const authButton = auth ? (
    // We are using making a request to the api, we want it to be proxied though our renderer server, so we set up our cookies with the renderer server and not the api
    // We use anchor tags because we want the entire browser to change the address it's looking at
    <a className="nav-link" href="/api/logout">
      Logout
    </a>
  ) : (
    <a className="nav-link" href="/api/auth/google">
      Login
    </a>
  );
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Visual E-commerce
      </Link>
      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admins">
              Admins
            </Link>
          </li>
          <li className="nav-item">{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

// The only property we care about is whether or not the user is authencated
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
