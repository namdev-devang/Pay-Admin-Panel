import { createSlice } from "@reduxjs/toolkit";
import { fetchBannerData } from "../../actions/bannerAct/bannerAct";

const initialState = {
    data: [],      // Stores decrypted data
    loading: false, // Indicates if data is being loaded
    error: null,    // Holds any error messages
};

const bannerSlice = createSlice({
    name: "banner",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBannerData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBannerData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchBannerData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default bannerSlice.reducer;
