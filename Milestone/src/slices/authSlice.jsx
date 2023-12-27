import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuthenticated: false,
    user: false,
    loading: false,
    error: null,
    token : localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loginStart(state) {
        state.loading = true;
        state.error = null;
      },
      loginSuccess(state, action) {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      },
      loginFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      logout(state) {
        state.token = null;
        state.isAuthenticated = false;
        state.user = null;
        state.loading = false;
        state.error = null;
      },
      logoutSuccess(state) {
        state.token = null;
        state.isAuthenticated = false;
        state.user = null;
        state.loading = false;
        state.error = null;
      },
      signupStart(state) {
        state.loading = true;
        state.error = null;
      },
      signupSuccess(state) {
        state.loading = false;
      },
      signupFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
  export const { loginStart, loginSuccess, loginFailure, logout, logoutSuccess, signupFailure, signupStart, signupSuccess } = authSlice.actions;
  
  export default authSlice.reducer;



