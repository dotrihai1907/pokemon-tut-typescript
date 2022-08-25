import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "./pokeSlice";

const store = configureStore({
  reducer: combineReducers({
    pokeReducer,
  }),
});

export default store;
