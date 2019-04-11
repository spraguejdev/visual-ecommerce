import React from "react";
import Axios from "axios";

class PropertyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowQty: false,
      currentProduct: {},
      disableMinusButton: false
    };
    this.postItemUpdate = this.postItemUpdate.bind(this);
    // this.getSingleItem = this.getSingleItem.bind(this);
  }

  componentDidMount() {
    var newState = Object.assign(this.state);
    newState.currentProduct = this.props.item;
    this.setState(newState);
  }

  // getSingleItem(product_id) {
  //   Axios.get("/product/single-item", {
  //     params: { product_id: product_id }
  //   }).then(res => {
  //     var newState = Object.assign(this.state);
  //     newState.products = res.data;
  //     console.log("this is response data: ", res);
  //     this.setState(newState);
  //   });
  // }

  postItemUpdate(currentProduct) {
    Axios.put("/product-update", currentProduct).then(data => {
      // this.getSingleItem(product_id);
    });
  }

  handleIncreaseInventory(e) {
    e.preventDefault();
    var newState = Object.assign(this.state);
    var currentQty = this.state.currentProduct.qty;
    // If quantity level is equal to zero, disable minus button and jump out of method.
    if (currentQty === 0 && e.target.name === "dec") {
      newState.disableMinusButton = !newState.disableMinusButton;
      this.setState(newState);
      return;
    } else {
      newState.disableMinusButton = false;
      this.setState({ newState });
    }
    // Decide if we will increment the qty or decrement the qty
    if (e.target.name === "dec") {
      currentQty -= 1;
    } else {
      currentQty += 1;
    }
    newState.currentProduct.qty = currentQty;
    this.postItemUpdate(newState.currentProduct);
  }

  render() {
    const qtyLevelStyle =
      this.props.item.qty <= 5
        ? "low-qty card card-style product-card "
        : " card card-style product-card safe";
    const { name, photo, product_id, qty, product_type } = this.props.item;
    var decrementButtonClass = "btn btn-danger button";
    if (this.state.disableMinusButton) {
      decrementButtonClass = "btn btn-danger button disabled";
    }
    return (
      <div className="col-sm-3">
        <div className={qtyLevelStyle}>
          <img className="card-img-top" src={photo} />
          <div className="card-body">
            <h1 className="card-title text-center">{qty}</h1>
            <p className="card-text card-seperator" />
            <a
              href="#"
              className={decrementButtonClass}
              name="dec"
              onClick={this.handleIncreaseInventory.bind(this)}
            >
              <i className="far fa-minus-square" />
            </a>
            <a
              href="#"
              className="btn btn-success button"
              onClick={this.handleIncreaseInventory.bind(this)}
            >
              <i className="far fa-plus-square" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyCard;
