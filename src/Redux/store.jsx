import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducers from "./Login/slice";
import registerReducers from "./Register/slice";
import getCarReducers from "./DetailCar/slice"

const rootReducer = combineReducers({
  login: loginReducers,
  register: registerReducers,
  getCar : getCarReducers
});

export default configureStore({
  reducer: rootReducer,
});
