import { createSlice } from "@reduxjs/toolkit";
import { fetchOtp } from "../../actions/OtpAct/OtpAct";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const otpSlice = createSlice({
    name: "otps",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchOtp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOtp.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default otpSlice.reducer;