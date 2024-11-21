import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authLogin = createAsyncThunk(
    'auth/login',
    async (AdminCredentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', AdminCredentials);
            const { accessToken, refreshToken } = response.data;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);
