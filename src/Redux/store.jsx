import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducers from "./Login/slice";
import registerReducers from "./Register/slice";

const rootReducer = combineReducers({
  login: loginReducers,
  register: registerReducers,
});

export default configureStore({
  reducer: rootReducer,
});
