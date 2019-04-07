import axios from "axios";

export const FETCH_USERS = "fetch_users";
export const FETCH_PRODUCTS = "fetch_products";
export const fetchUsers = () => async (dispatch, getState, api) => {
  // We no longer have to use the entire endpoint
  const res = await api.get("/users");

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

// When redux thunk calls the function, (atuomaticall invoke), it will now have two extra arguments.
export const fetchProducts = () => async dispatch => {
  // rather than using the base axio library, we use the custom instance
  const res = await axios.get("http://localhost:3003/products");
  dispatch({
    type: FETCH_PRODUCTS,
    payload: res
  });
};
