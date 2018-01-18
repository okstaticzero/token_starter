import * as types from '../store/actionTypes';
import Token from '../services/TokenService';
import { push } from "react-router-redux";


export const showPreloader = (bool) => {
  return {
    type: types.SHOW_PRELOADER,
    payload: bool
  };
};


export const accountSuccess = (account) => {
  return {
    type: types.ACCOUNT_SUCCESS,
    payload: account
  };
};

export const createAccount = (specificNetworkAddress, identity) => {
  return async dispatch => {
    dispatch(showPreloader(true));
    try {
      dispatch(accountSuccess({ specificNetworkAddress, identity }));
      await Token.signup(specificNetworkAddress);
      dispatch(push(`/user/${specificNetworkAddress}`));
      dispatch(showPreloader(false));
    } catch (error) {
      console.log('sign up error: ', error);
      dispatch(showPreloader(false));
    }
  };
};