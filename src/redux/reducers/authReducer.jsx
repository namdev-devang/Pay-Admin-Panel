import { createSlice } from "@reduxjs/toolkit";
import { authLogin } from "../actions/authAction";

const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      loading: false,
      error: null,
      tokens: {
        accessToken: localStorage.getItem("accessToken") || null,
        refreshToken: localStorage.getItem("refreshToken") || null,
      },
    },
    reducers: {
      logout: (state) => {
        state.user = null;
        state.error = null;
  
        // Clear tokens from local storage
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
  
        state.tokens = { accessToken: null, refreshToken: null };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(authLogin.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(authLogin.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.tokens = {
            accessToken: action.payload.accessToken,
            refreshToken: action.payload.refreshToken,
          };
        })
        .addCase(authLogin.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const { logout } = authSlice.actions;
  export default authSlice.reducer;
  