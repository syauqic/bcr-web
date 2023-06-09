import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducers from "./Login/slice";

const rootReducer = combineReducers({
  login: loginReducers,
});

export default configureStore({
  reducer: rootReducer,
});
