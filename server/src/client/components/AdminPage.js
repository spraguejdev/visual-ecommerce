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

function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(
  mapStateToProps,
  { fetchProducts }
)(AdminPage);
