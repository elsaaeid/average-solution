import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import productReducer from "./features/product/productSlice";
import emailReducer from "../redux/features/email/emailSlice";
import filterReducerProduct from "../redux/features/product/filterSlice";
import filterReducerAuth from "../redux/features/auth/filterSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    email: emailReducer,
    filterReducerAuth: filterReducerAuth,
    filterReducerProduct: filterReducerProduct,
  },
});
