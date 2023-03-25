import { combineReducers, createStore } from 'redux';
import counterReducer from "./reducers";

const rootReducer = combineReducers({
  counter: counterReducer
})

export const store = createStore(rootReducer);