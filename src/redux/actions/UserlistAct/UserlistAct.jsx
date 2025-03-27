import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";

const decryptData = (encryptedData) => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, "kanhape");
        const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedString) {
            throw new Error("Decryption failed: Decrypted string is empty.");
        }

        return JSON.parse(decryptedString);
    } catch (error) {
        console.error("Error during decryption:", error.message);
        throw new Error("Failed to decrypt data");
    }
};

export const fetchUserlist = createAsyncThunk(
    "userlist/fetchUserlist",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                "https://development-api.payzo.in/api/user/list",
                {}, // Add body if required
                {
                    headers: { token: localStorage.getItem("token") },
                }
            );

            const encryptedData = response.data?.Data;

            if (!encryptedData) {
                throw new Error("Response data is invalid or missing.");
            }

            const decryptedData = decryptData(encryptedData);

            return decryptedData; 
        } catch (error) {
            console.error("Error in fetchUserlist:", error.message);

            const errorMessage =
                error.response?.data?.message || "Failed to fetch the user list";

            return rejectWithValue(errorMessage);
        }
    }
);
