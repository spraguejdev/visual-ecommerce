import axios from "axios";

export const FETCH_USERS = "fetch_users";
export const FETCH_PRODUCTS = "fetch_products";
export const FETCH_CURRENT_USER = "fetch_current_user";

// When redux thunk calls the function, (atuomaticall invoke), it will now have two extra arguments.
export const fetchUsers = () => async (dispatch, getState, api) => {
  // We no longer have to use the entire endpoint
  const res = await api.get("/users");

  // Once we get a response back from the api, we dispatch the FETCH_USERS action
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");
  dispatch({
    type: FETCH_CURRENT_USER,
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
