import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartslice";
import orderReducer from "../redux/orderslice";
import categoryReducer from "../redux/categoryslice";
import singleitemReducer from "../redux/singleitemslice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    category: categoryReducer,
    singleitem: singleitemReducer,
  },
});

export default store;
