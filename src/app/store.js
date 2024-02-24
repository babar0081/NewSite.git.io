import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import authRedeucer from '../features/Auth/authSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth:authRedeucer
  },
});
