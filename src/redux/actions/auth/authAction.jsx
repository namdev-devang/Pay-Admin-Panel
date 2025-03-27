import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authLogin = createAsyncThunk('auth/login', async (AdminCredentials, { rejectWithValue }) => {
    try {
        const response = await axios.post('https://development-api.payzo.in/api/admin/login', AdminCredentials);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong");
    }
});
