import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/index";
import { Helmet } from "react-helmet";

class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users List" />
        <meta
          property="og:url"
          content="https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/binaryCoders.jpg"
        />
      </Helmet>
    );
  }

  render() {
    return (
      <div className="container text-center" style={{ maxWidth: "500px" }}>
        {this.head()}
        <h4 style={{ padding: "20px 0 20px 0 " }}>
          Here Is a big List of Users
        </h4>
        <ul className="list-group">
          {this.props.users.map(user => {
            return (
              <li className="list-group-item" key={user.id}>
                {user.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default {
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersList),
  loadData
};
