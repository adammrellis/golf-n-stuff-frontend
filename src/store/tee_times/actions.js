import axios from "axios";
import {
  FETCH_ALL_TEE_TIMES_PENDING,
  FETCH_ALL_TEE_TIMES_SUCCESS,
  FETCH_ALL_TEE_TIMES_FAILED,
  FETCH_ONE_TEE_TIME_PENDING,
  FETCH_ONE_TEE_TIME_SUCCESS,
  FETCH_ONE_TEE_TIME_FAILED,
  ADD_TEE_TIME_PENDING,
  ADD_TEE_TIME_SUCCESS,
  ADD_TEE_TIME_FAILED,
  REMOVE_TEE_TIME_PENDING,
  REMOVE_TEE_TIME_SUCCESS,
  REMOVE_TEE_TIME_FAILED,
  UPDATE_TEE_TIME_PENDING,
  UPDATE_TEE_TIME_SUCCESS,
  UPDATE_TEE_TIME_FAILED,
  ADD_CUSTOMER_TEE_TIME_PENDING,
  ADD_CUSTOMER_TEE_TIME_SUCCESS,
  ADD_CUSTOMER_TEE_TIME_FAILED,
  REMOVE_CUSTOMER_TEE_TIME_PENDING,
  REMOVE_CUSTOMER_TEE_TIME_SUCCESS,
  REMOVE_CUSTOMER_TEE_TIME_FAILED
} from "./constants.js";

export const fetchAllTee_times = () => {
  return dispatch => {
    dispatch({
      type: FETCH_ALL_TEE_TIMES_PENDING
    });
    axios
      .get(`http://localhost:8000/tee_times`)
      .then(response => {
        const tee_times = response.data;
        dispatch({
          type: FETCH_ALL_TEE_TIMES_SUCCESS,
          payload: tee_times
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ALL_TEE_TIMES_FAILED,
          payload: error
        });
      });
  };
};

export const fetchOneTee_time = id => {
  return dispatch => {
    dispatch({
      type: FETCH_ONE_TEE_TIME_PENDING
    });
    axios
      .get(`http://localhost:8000/tee_times/${id}`)
      .then(response => {
        const tee_time = response.data;
        dispatch({
          type: FETCH_ONE_TEE_TIME_SUCCESS,
          payload: tee_time
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_ONE_TEE_TIME_FAILED,
          payload: error
        });
      });
  };
};

export const addTee_time = newTee_Time => {
  return dispatch => {
    dispatch({
      type: ADD_TEE_TIME_PENDING
    });
    axios
      .post(`http://localhost:8000/tee_times`, newTee_Time)
      .then(response => {
        dispatch({
          type: ADD_TEE_TIME_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_TEE_TIME_FAILED,
          payload: error
        });
      });
  };
};

export const updateTee_time = updatedTee_Time => {
  return dispatch => {
    dispatch({
      type: UPDATE_TEE_TIME_PENDING
    });
    axios
      .patch(
        `http://localhost:8000/tee_times/${updatedTee_Time.id}`,
        updatedTee_Time
      )
      .then(response => {
        dispatch({
          type: UPDATE_TEE_TIME_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: UPDATE_TEE_TIME_FAILED,
          payload: error
        });
      });
  };
};

export const removeTee_time = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_TEE_TIME_PENDING
    });
    axios
      .delete(`http://localhost:8000/tee_times/${id}`)
      .then(response => {
        console.log("RESPONSE", response);
        dispatch({
          type: REMOVE_TEE_TIME_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: REMOVE_TEE_TIME_FAILED,
          payload: error
        });
      });
  };
};

export const addCustomerTee_time = newTee_Time => {
  return dispatch => {
    dispatch({
      type: ADD_CUSTOMER_TEE_TIME_PENDING
    });
    axios
      .post(`http://localhost:8000/customer_tee_times`, newTee_Time)
      .then(response => {
        dispatch({
          type: ADD_CUSTOMER_TEE_TIME_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_CUSTOMER_TEE_TIME_FAILED,
          payload: error
        });
      });
  };
};

export const removeCustomerTee_time = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_CUSTOMER_TEE_TIME_PENDING
    });
    axios
      .delete(`http://localhost:8000/customer_tee_times/${id}`)
      .then(response => {
        console.log("RESPONSE", response);
        dispatch({
          type: REMOVE_CUSTOMER_TEE_TIME_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: REMOVE_CUSTOMER_TEE_TIME_FAILED,
          payload: error
        });
      });
  };
};