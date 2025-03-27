import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";

const decryptData = (encryptedData) => {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, "kanhape");
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
};


export const fetchServiceData = createAsyncThunk(
    "services/fetchServiceData",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "https://development-api.payzo.in/api/service/list"
            );
            const decryptedData = decryptData(response.data.Data);
            return decryptedData;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Error fetching data");
        }
    }
);



export const addServicelist = createAsyncThunk(
    "userlist/addServicelist",
    async (serviceData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                "https://development-api.payzo.in/api/service/create",
                serviceData,
                {
                    headers: { token: localStorage.getItem("token") },
                }
            );

            return response.data?.Data;;
        } catch (error) {
            console.error("Error in addServicelist:", error.message);

            const errorMessage =
                error.response?.data?.message || "Failed to fetch the Service list";

            return rejectWithValue(errorMessage);
        }
    }
);  