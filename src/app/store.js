import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Product-list/productSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
