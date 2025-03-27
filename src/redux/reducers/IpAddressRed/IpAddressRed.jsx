import { createSlice } from "@reduxjs/toolkit";
import { fetchIpAddressData } from "../../actions/IpAddressAct/IpAddressAct";

const initialState = {
    data: [],      // Stores decrypted data
    loading: false, // Indicates if data is being loaded
    error: null,    // Holds any error messages
};

const ipAddressSlice = createSlice({
    name: "ipaddress",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchIpAddressData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchIpAddressData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchIpAddressData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default ipAddressSlice.reducer;
