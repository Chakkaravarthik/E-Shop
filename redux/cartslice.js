import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((i) => i.item_id === action.payload.item_id);
      if (item) {
        item.item_quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, item_quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems.length=0;
    },
    updateQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.item_id === action.payload.item_id);
      if (item) {
        item.item_quantity += action.payload.amount;
        if (item.item_quantity <= 0) {
          state.cartItems = state.cartItems.filter((i) => i.item_id !== action.payload.item_id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
