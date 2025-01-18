import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "../adapters/redux/exampleSlice";

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
