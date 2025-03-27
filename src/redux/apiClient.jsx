import axios from "axios";

// Create Axios instance
const apiClient = axios.create({
    baseURL: "https://development-api.payzo.in/api", // Base URL for the API
    timeout: 10000, // Optional: Timeout in milliseconds
});

// Request Interceptor
apiClient.interceptors.request.use(
    (config) => {
        // Attach Authorization header with token if available
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Response Interceptor
apiClient.interceptors.response.use(
    (response) => {
        // Process successful response
        return response;
    },
    (error) => {
        // Handle response errors
        if (error.response) {
            // Handle known errors
            console.error("Response Error:", error.response.data);
        } else {
            // Handle unknown errors (e.g., network issues)
            console.error("Network or Server Error:", error.message);
        }
        return Promise.reject(error);
    }
);

export default apiClient;
