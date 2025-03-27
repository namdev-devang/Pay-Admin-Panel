import { createSlice } from "@reduxjs/toolkit";
import { fetchNotifications } from "../../actions/nortificationAct/nortifictionAct";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const notificationSlice = createSlice({
    name: "notifications",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotifications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNotifications.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchNotifications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default notificationSlice.reducer;
