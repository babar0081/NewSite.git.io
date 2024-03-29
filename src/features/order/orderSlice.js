import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder  } from './orderAPI';

const initialState = {
  orders: [],
  status: 'idle',
  currentOrder:'null'
};


export const createOrderAsync = createAsyncThunk(
  'order/createOrder',
  async (order) => {
    const response = await createOrder(order);

    return response.data;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,

  reducers: {
   
    resetOrder:(state)=>{
   state.currentOrder=null

    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
        state.currentOrder = action.payload;
      });
    },
  });
  
  export const { resetOrder } = orderSlice.actions;
  
  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectCurrentOrder = (state) => state.order.currentOrder;
  

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default orderSlice.reducer;
