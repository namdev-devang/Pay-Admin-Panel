import { createSlice } from "@reduxjs/toolkit";
import { authLogin } from "../../actions/auth/authAction";

const initialState = {
    user: null,
    loading: false,
    error: null,

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
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

export default authSlice.reducer;