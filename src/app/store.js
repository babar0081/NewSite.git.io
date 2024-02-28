import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import authReducer from '../features/Auth/authSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth:authReducer
  },
});
