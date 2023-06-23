/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';


const registerSlice = createSlice({
    name: "register",
    initialState: {
        user: null,
        loading: false,
    },
    reducers: {
        registerStart(state) {
            state.loading = true;
            state.user = null;
        },
       registerSuccess(state, action) {
            state.loading = false;
            state.user = action.payload;
        },
       registerFailure(state) {
            state.loading = false;
            state.user = null;
        },
    },
});

export const {registerStart,registerSuccess,registerFailure } = registerSlice.actions;

export default registerSlice.reducer;