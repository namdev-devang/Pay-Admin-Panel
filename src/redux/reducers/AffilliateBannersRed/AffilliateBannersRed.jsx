import { createSlice } from "@reduxjs/toolkit";
import { fetchAffilateBannerData } from "../../actions/AffilliateBannersAct/AffilliateBannersAct";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const affilateBannerSlice = createSlice({
    name: "affilateBanner",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAffilateBannerData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAffilateBannerData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAffilateBannerData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default affilateBannerSlice.reducer;
