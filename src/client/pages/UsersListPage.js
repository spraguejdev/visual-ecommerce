import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/index";

class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="container text-center" style={{ maxWidth: "500px" }}>
        <h1 style={{ padding: "20px 0 20px 0 " }}>
          Here Is A big List Of Users
        </h1>
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
