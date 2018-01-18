import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import transferReducer from "../transfer/TransferReducer";
import accountsReducer from "../accounts/AccountsReducer";
import * as types from "./actionTypes";

const loadingState = (state = { loading: false }, action) => {
  switch (action.type) {
    case types.SHOW_PRELOADER:
      return { ...state, loading: action.payload };
    default:
      return state
  }
}


const root = combineReducers({
  router: routerReducer,
  transfer: transferReducer,
  accounts: accountsReducer,
  loadingState
});

export default root;
