import { createSlice } from "@reduxjs/toolkit";
import { fetchUserlist } from "../../actions/UserlistAct/UserlistAct";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const UserlistSlice = createSlice({
    name: "userlist",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserlist.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserlist.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default UserlistSlice.reducer;
