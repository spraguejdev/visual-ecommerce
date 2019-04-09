import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        // If you are not loged in, return the user
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }
  function mapStateToProps({ auth }) {
    return { auth };
  }
  // We use connect helper here because the RequireAuth component needs to be aware of the user's authenication status
  return connect(mapStateToProps)(RequireAuth);
};
