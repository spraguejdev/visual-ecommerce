import axios from "axios";

export const FETCH_USERS = "fetch_users";
export const FETCH_PRODUCTS = "fetch_products";
export const fetchUsers = () => async dispatch => {
  const res = await axios.get("http://react-ssr-api.herokuapp.com/users");

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const fetchProducts = () => async dispatch => {
  const res = await axios.get("http://localhost:3003/products");
  dispatch({
    type: FETCH_PRODUCTS,
    payload: res
  });
};
