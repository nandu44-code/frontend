import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./api/apiSlice";
import authReducer from'../features/auth/authSlice'
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
    reudcer:{
        [apiSlice:reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>

        getDefaultMiddleware().concat(apiSlice.middleware),
        devTools: true

})