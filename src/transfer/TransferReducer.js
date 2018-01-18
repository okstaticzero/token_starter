import * as types from "../store/actionTypes";

const initialState = { balance: 0 }

export default (state = initialState, action) => {
    switch (action.type) {
        case types.BALANCE_SUCCESS:
            return { ...state, balance: action.payload };

        default:
            return state;
    }
};
