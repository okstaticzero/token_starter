import * as types from '../store/actionTypes';
import Token from '../services/TokenService';


const balanceSuccess = (balance) => {
    return { type: types.BALANCE_SUCCESS, payload: balance }
}

export const getMyBalance = (account) => {
    return async dispatch => {
        try {
            const balance = await Token.getMyBalance(account);
            dispatch(balanceSuccess(balance.c[0]));
        } catch (error) {
            console.log('E: ', error);
        }
    }
}

///tranfer

const transferSuccess = (balance) => {
    return { type: types.TRANSFER_SUCCESS }
}

export const transferTokens = (myAccount, toAccount, amount) => {
    return async dispatch => {
        dispatch(showPreloader(true));
        try {
            await Token.transfer(myAccount, toAccount, amount);
            dispatch(transferSuccess());
            console.log('PREE OUT');

            dispatch(showPreloader(false));
        } catch (error) {
            console.log('PREE OUT');
            dispatch(showPreloader(false));
            console.log('E: ', error);
        }
    }
}


export const showPreloader = (bool) => {
    return {
        type: types.SHOW_PRELOADER,
        payload: bool
    };
};