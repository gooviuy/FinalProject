import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import loginReducer from "../reducers/loginReducer";
import topicReducer from "../reducers/topicReducer";

const initialState = {};
const middleware = [thunk];
const rootReducer = combineReducers({ login: loginReducer, topic: topicReducer });

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

/*
import { combineReducers, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginReducer from "../reducers/loginReducer";
import { createStore, applyMiddleware } from "redux";

const rootReducer = combineReducers({ login: loginReducer });
// Note: this API requires redux@>=3.1.0
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);
*/
