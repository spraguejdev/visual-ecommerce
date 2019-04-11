import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";

class AdminProductPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div className="container text-center" style={{ maxWidth: "500px" }}>
        <h1 style={{ padding: "20px 0 20px 0 " }}>
          {" "}
          Here Is A Big List Of Products
        </h1>
        <ul className="list-group">
          {this.props.products.map((product, i) => {
            return (
              <li className="list-group-item" key={i}>
                {product.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function loadData(store) {
  return store.dispatch(fetchProducts());
}

function mapStateToProps(state) {
  return { products: state.products };
}

export default {
  component: connect(
    mapStateToProps,
    { fetchProducts }
  )(AdminProductPage),
  loadData
};
