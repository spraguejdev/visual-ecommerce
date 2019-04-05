import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";

class AdminPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div>
        Here is a big list of products
        <ul>
          {this.props.products.map((product, i) => {
            return <li key={i}>{product.name}</li>;
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

// export { loadData };
export default {
  component: connect(
    mapStateToProps,
    { fetchProducts }
  )(AdminPage),
  loadData
};
