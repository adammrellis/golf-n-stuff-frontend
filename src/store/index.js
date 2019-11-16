import { createStore, combineReducers, applyMiddleware } from 'redux'
import customersReducer from './customers/reducer'
import tee_timesReducer from './tee_times/reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const rootReducer = combineReducers({
  customers: customersReducer,
  tee_times: tee_timesReducer,
})

const middleware = [thunk, logger]

export default createStore(rootReducer, applyMiddleware(...middleware))