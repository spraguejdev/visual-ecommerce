import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";
import { Helmet } from "react-helmet";

class ProductsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.products.length} Products Loaded`}</title>
        <meta property="og:title" content="Products List" />
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
          {" "}
          Here Is A Big List Of Products
        </h4>
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
  )(ProductsPage),
  loadData
};
