import axios from "axios";
import {
  FETCH_ALL_CUSTOMERS_PENDING,
  FETCH_ALL_CUSTOMERS_SUCCESS,
  FETCH_ALL_CUSTOMERS_FAILED,
  FETCH_ONE_CUSTOMER_PENDING,
  FETCH_ONE_CUSTOMER_SUCCESS,
  FETCH_ONE_CUSTOMER_FAILED,
  ADD_CUSTOMER_PENDING,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILED,
  REMOVE_CUSTOMER_PENDING,
  REMOVE_CUSTOMER_SUCCESS,
  REMOVE_CUSTOMER_FAILED,
  UPDATE_CUSTOMER_PENDING,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILED
} from "./constants.js";

export const fetchAllCustomers = () => {
  return dispatch => {
    dispatch({
      type: FETCH_ALL_CUSTOMERS_PENDING
    });
    axios
      .get(`http://localhost:8000/customers`)
      .then(response => {
        console.log("getting data for customers", response.data);
        const customers = response.data;
        dispatch({
          type: FETCH_ALL_CUSTOMERS_SUCCESS,
          payload: customers
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ALL_CUSTOMERS_FAILED,
          payload: error
        });
      });
  };
};

export const fetchOneCustomer = id => {
  return dispatch => {
    dispatch({
      type: FETCH_ONE_CUSTOMER_PENDING
    });
    axios
      .get(`http://localhost:8000/customers/${id}`)
      .then(response => {
        const customer = response.data;
        dispatch({
          type: FETCH_ONE_CUSTOMER_SUCCESS,
          payload: customer
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ONE_CUSTOMER_FAILED,
          payload: error
        });
      });
  };
};

export const addCustomer = newCustomer => {
  return dispatch => {
    dispatch({
      type: ADD_CUSTOMER_PENDING
    });
    axios
      .post(`http://localhost:8000/customers`, newCustomer)
      .then(response => {
        dispatch({
          type: ADD_CUSTOMER_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_CUSTOMER_FAILED,
          payload: error
        });
      });
  };
};

export const updateCustomer = updatedCustomer => {
  return dispatch => {
    dispatch({
      type: UPDATE_CUSTOMER_PENDING
    });
    axios
      .patch(
        `http://localhost:8000/customers/${updatedCustomer.id}`,
        updatedCustomer
      )
      .then(response => {
        dispatch({
          type: UPDATE_CUSTOMER_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: UPDATE_CUSTOMER_FAILED,
          payload: error
        });
      });
  };
};

export const removeCustomer = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_CUSTOMER_PENDING
    });
    axios
      .delete(`http://localhost:8000/customers/${id}`)
      .then(response => {
        console.log("RESPONSE", response);
        dispatch({
          type: REMOVE_CUSTOMER_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: REMOVE_CUSTOMER_FAILED,
          payload: error
        });
      });
  };
};
