import * as types from "./constants";
import { updateTee_Time } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_TEE_TIMES_PENDING:
      return state;
    case types.FETCH_ALL_TEE_TIMES_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ALL_TEE_TIMES_FAILED:
      return action.payload;

    case types.FETCH_ONE_TEE_TIME_PENDING:
      return state;
    case types.FETCH_ONE_TEE_TIME_SUCCESS:
      return [...action.payload, ...state];
    case types.FETCH_ONE_TEE_TIME_FAILED:
      return action.payload;

    case types.ADD_TEE_TIME_PENDING:
      return state;
    case types.ADD_TEE_TIME_SUCCESS:
      return [action.payload, ...state];
    case types.ADD_TEE_TIME_FAILED:
      return action.payload;

    case types.REMOVE_TEE_TIME_PENDING:
      return state;
    case types.REMOVE_TEE_TIME_SUCCESS:
      return state.filter(
        Tee_TimeInfo => Tee_TimeInfo.id !== action.payload.id
      );
    case types.REMOVE_TEE_TIME_FAILED:
      return action.payload;

    case types.UPDATE_TEE_TIME_PENDING:
      return state;
    case types.UPDATE_TEE_TIME_SUCCESS:
      console.log("ACTION in REDUCER", action.payload);
      let otherTee_Times = state.filter(
        Tee_TimeInfo => Tee_TimeInfo.id != action.payload.id
      );
      return [...otherTee_Times, action.payload].sort((a, b) => a.id - b.id);

    case types.UPDATE_TEE_TIME_FAILED:
      return action.payload;

    default:
      return state;
  }
};
