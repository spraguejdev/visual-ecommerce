import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions/index";
import requireAuth from "../components/hocs/requireAuth";

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return (
        <li classNam="list-group-item" key={admin.id}>
          {admin.name}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="container text-center" style={{ maxWidth: "500px" }}>
        <h1 style={{ padding: "20px 0 20px 0 " }}>Protected list of admins</h1>
        <ul className="list-groupo">{this.renderAdmins()}</ul>
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
  )(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
