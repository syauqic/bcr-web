import { createSlice } from "@reduxjs/toolkit";
import auth from "../../utils/auth";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: auth.getAuth() ?? null,
    loading: false,
  },
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.user = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      auth.setAuth(action.payload);
    },
    loginFailure(state) {
      state.loading = false;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice.reducer;
