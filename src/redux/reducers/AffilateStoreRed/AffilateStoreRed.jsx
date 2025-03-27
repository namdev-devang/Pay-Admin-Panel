import { createSlice } from "@reduxjs/toolkit";
import { fetchAffilateStoreData } from "../../actions/AffilateStoreAct/AffilateStoreAct";

const initialState = {
    data: [],      
    loading: false, 
    error: null,  
};

const affilatestoreSlice = createSlice({
    name: "affilatestore",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAffilateStoreData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAffilateStoreData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAffilateStoreData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default affilatestoreSlice.reducer;
