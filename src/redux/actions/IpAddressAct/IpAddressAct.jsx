import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";

// Function to decrypt data
const decryptData = (encryptedData) => {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, "kanhape");
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
};

// Thunk to fetch and decrypt data
export const fetchIpAddressData = createAsyncThunk(
    "services/fetchBannerData",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "https://development-api.payzo.in/api/ip-address/list"
            );
            const decryptedData = decryptData(response.data.Data); // Adjust based on the response structure
            return decryptedData;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Error fetching data");
        }
    }
);
