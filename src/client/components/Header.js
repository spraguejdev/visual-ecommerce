import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  // Look at the value of auth, and show appropiate button
  const authButton = auth ? (
    // We are using making a request to the api, we want it to be proxied though our renderer server, so we set up our cookies with the renderer server and not the api
    // We use anchor tags because we want the entire browser to change the address it's looking at
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );
  return (
    <nav>
      <div className="nav-wrapper grey darken-4">
        <Link to="/" className="brand-logo">
          React SSR
        </Link>
        <ul className="right">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li>{authButton}</li>
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
