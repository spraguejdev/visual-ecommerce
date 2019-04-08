import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions/index";

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  render() {
    return (
      <div>
        <h3>Protected List of Admins</h3>
        <ul>
          {this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
