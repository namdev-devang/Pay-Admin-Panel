import { configureStore } from "@reduxjs/toolkit";
import { rootreducer } from "./reducers";

export const store = configureStore({
    reducer: {
        rootreducer
    },
})