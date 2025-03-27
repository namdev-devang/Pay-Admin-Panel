import { createSlice } from "@reduxjs/toolkit";
import { fetchServiceData } from "../../actions/masterServiceAct/masterServiceAction";
import { addServicelist } from "../../actions/masterServiceAct/masterServiceAction"; // Import the add service action

const initialState = {
    data: [],
    loading: false,
    error: null,
    adding: false,
};

const serviceSlice = createSlice({
    name: "services",
    initialState,
    extraReducers: (builder) => {
        // Fetch service data
        builder
            .addCase(fetchServiceData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchServiceData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchServiceData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // Add service data
        builder
            .addCase(addServicelist.pending, (state) => {
                state.adding = true;
                state.error = null;
            })
            .addCase(addServicelist.fulfilled, (state, action) => {
                state.adding = false;
                state.data.push(action.payload);
            })
            .addCase(addServicelist.rejected, (state, action) => {
                state.adding = false;
                state.error = action.payload;
            });
    },
});

export default serviceSlice.reducer;
