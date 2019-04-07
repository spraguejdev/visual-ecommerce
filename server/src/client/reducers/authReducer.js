import FETCH_CURRENT_USER from "../actions/index";

// Initial state will be set to null for our authenicated routes, which indicates that we do not yet know
// Weather or not the user is authenicated
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      // If the user is not authenicated, then we want to make sure that the user is not defined
      return action.payload.data || false;
    default:
      return state;
  }
}
