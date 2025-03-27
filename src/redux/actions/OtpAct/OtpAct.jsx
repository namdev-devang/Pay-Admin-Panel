
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchOtp = createAsyncThunk(
    "otp/fetchOtp",
    async (_, { rejectWithValue }) => {

        try {
            const response = await axios.get(
                "https://development-api.payzo.in/api/admin/otp-get", {
                headers: { token: localStorage.getItem("token") },
            }
            );

            return response.data.Data;
        } catch (error) {
            console.error("Error in fetchOtp:", error.message);
            return rejectWithValue(error.response?.data || "Failed to fetch otp");
        }
    }
);
