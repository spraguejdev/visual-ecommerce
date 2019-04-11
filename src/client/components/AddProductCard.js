import React from "react";
import Axios from "axios";

class AddProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
      addProductIsHidden: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    const information = this.state.productInfo;
    if (name === "qty") {
      value = Number(value);
    }
    information[`${name}`] = value;
    this.setState({
      productInfo: information
    });
  }

  postProduct(productInfo) {
    Axios.post("/products", productInfo).then(() => {
      this.props.getProducts;
    });
  }

  handleAddClick(e) {
    e.preventDefault();
    const productInfo = this.state.productInfo;
    productInfo.photo =
      "https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/image1.jpeg";
    if (
      !productInfo.photo ||
      !productInfo.name ||
      !productInfo.qty ||
      !productInfo.description
    ) {
      alert("Please fill in all textboxes");
      return;
    }
    this.postProduct(productInfo);
    this.setState({
      addProductIsHidden: !this.state.addProductIsHidden
    });
  }

  handleAddProductClick(e) {
    e.preventDefault();
    this.setState({
      addProductIsHidden: !this.state.addProductIsHidden
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.addProductIsHidden && (
          <div className="col-sm-3">
            <div className="card card-style product-card safe">
              <img
                className="card-img-top"
                src="./images/checkMark2.png"
                onClick={this.handleAddProductClick.bind(this)}
              />
              <div className="card-body">
                <h1 className="card-title text-center">0</h1>
                <p className="card-text card-seperator" />
                <a href="#" className="btn btn-danger button" name="dec">
                  <i className="far fa-minus-square " />
                </a>
                <a href="#" className="btn btn-success button">
                  <i className="far fa-plus-square" />
                </a>
              </div>
            </div>
          </div>
        )}
        {!this.state.addProductIsHidden && (
          <div className="col-sm-3">
            <div className="card card-style product-card safe padding">
              <form>
                <div className="form-group add-product-padding">
                  <label>
                    <i className="fas fa-tags add-product-icon" />
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="name"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group add-product-padding">
                  <label>
                    <i className="fas fa-tshirt add-product-icon" />
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="product_type"
                    onChange={this.handleChange}
                    required
                    requires
                  />
                </div>
                <div className="form-group">
                  <label>
                    <i className="fab fa-slack-hash add-product-icon" />
                  </label>
                  <select
                    className="form-control form-control-sm"
                    name="qty"
                    onChange={this.handleChange}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <i className="far fa-comments add-product-icon" />
                  </label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows="2"
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="mx-auto">
                    <i className="far fa-images add-product-icon" />
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="add-product-input"
                    name="photo"
                  />
                </div>

                <div id="center">
                  <a
                    onClick={this.handleAddClick.bind(this)}
                    href="#"
                    className="btn btn-success"
                    id="add-product-button"
                  >
                    <i className="far fa-plus-square" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AddProductCard;
