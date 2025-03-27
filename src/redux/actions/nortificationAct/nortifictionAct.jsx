
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";


const decryptData = (encryptedData) => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, "kanhape");
        const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedString) {
            throw new Error("Decryption failed. Decrypted string is empty.");
        }

        return decryptedString;
    } catch (error) {
        console.error("Error during decryption:", error.message);
        throw new Error("Failed to decrypt data");
    }
};


export const fetchNotifications = createAsyncThunk(
    "notifications/fetchNotifications",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "https://development-api.payzo.in/api/notification/list/admin", {
                headers: { token: localStorage.getItem("token") },
            }
            );

            const decryptedData = decryptData(response.data.Data);

            return decryptedData;
        } catch (error) {
            console.error("Error in fetchNotifications:", error.message);
            return rejectWithValue(error.response?.data || "Failed to fetch notifications");
        }
    }
);
