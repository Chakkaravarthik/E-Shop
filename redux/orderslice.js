import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [], // Orders will be stored here
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
