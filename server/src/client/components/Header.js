import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  // Look at the value of auth, and show appropiate button
  console.log("this is the auth: ", auth);

  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );
  // const authButton = auth ? (
  //   // We are using making a request to the api, we want it to be proxied though our renderer server, so we set up our cookies with the renderer server and not the api
  //   // We use anchor tags because we want the entire browser to change the address it's looking at
  //   <a href="/api/logout">Logout</a>
  // ) : (
  //   <a href="/api/auth/google">Login</a>
  // );
  return (
    <div>
      <Link to="/">React Ssrt</Link>
      <Link to="/users">Users</Link>
      <div>{authButton}</div>
    </div>
  );
};

// The only property we care about is whether or not the user is authencated
function mapStateToProps({ auth }) {
  console.log({ auth });
  return { auth };
}
export default connect(mapStateToProps)(Header);
