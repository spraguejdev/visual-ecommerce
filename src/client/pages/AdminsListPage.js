import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";
import requireAuth from "../components/hocs/requireAuth";
import AddProductCard from "../components/AddProductCard";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet";

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.products} Products Loaded`}</title>
        <meta property="og:title" content="Adims Products List" />
        <meta
          property="og:url"
          content="https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/binaryCoders.jpg"
        />
      </Helmet>
    );
  }
  renderAdmins() {
    return this.props.products.map(admin => {
      return (
        <li className="list-group-item" key={admin.id}>
          {admin.name}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="h-100">
        <div className="row h-1000">
          <div className="col-2 no-flow side-bar text-center">
            <i className="far fa-user-circle" id="admin" />
            <p3 id="admin"> Admin</p3>
          </div>
          <div className="col-10 no-float ">
            <i className="fas fa-tachometer-alt" />
            <p3 id="dashboard"> Dashboard</p3>
            <div className="row">
              {/* product skelton */}
              {this.props.products.map((item, i) => (
                <ProductCard
                  item={item}
                  key={i}
                  handleUpdate={this.getProducts}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default {
  component: connect(
    mapStateToProps,
    { fetchProducts }
  )(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchProducts())
};
// <AddProductCard
// handleAddProductClick={this.handleAddProductClick}
// getProducts={this.getProducts}
// />
