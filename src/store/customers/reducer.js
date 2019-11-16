import * as types from "./constants.js";
import { updateCustomer } from "./actions.js";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CUSTOMERS_PENDING:
      return state;
    case types.FETCH_ALL_CUSTOMERS_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ALL_CUSTOMERS_FAILED:
      return action.payload;

    case types.FETCH_ONE_CUSTOMER_PENDING:
      return state;
    case types.FETCH_ONE_CUSTOMER_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ONE_CUSTOMER_FAILED:
      return action.payload;

    case types.ADD_CUSTOMER_PENDING:
      return state;
    case types.ADD_CUSTOMER_SUCCESS:
      return [action.payload, ...state];
    case types.ADD_CUSTOMER_FAILED:
      return action.payload;

    case types.REMOVE_CUSTOMER_PENDING:
      return state;
    case types.REMOVE_CUSTOMER_SUCCESS:
      return state.filter(
        customerInfo => customerInfo.id !== action.payload.id
      );
    case types.REMOVE_CUSTOMER_FAILED:
      return action.payload;

    case types.UPDATE_CUSTOMER_PENDING:
      return state;
    case types.UPDATE_CUSTOMER_SUCCESS:
      console.log("ACTION in REDUCER", action.payload);
      let otherCustomers = state.filter(
        customerInfo => customerInfo.id != action.payload.id
      );
      return [...otherCustomers, action.payload].sort((a, b) => a.id - b.id);

    case types.UPDATE_CUSTOMER_FAILED:
      return action.payload;

    default:
      return state;
  }
};
