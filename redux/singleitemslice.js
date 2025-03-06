import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleitem: [], // Orders will be stored here
};

const singleitemSlice = createSlice({
  name: "singleitem",
  initialState,
  reducers: {
    UpdateSingleItem: (state, action) => {
      state.singleitem.push(action.payload);
    },
    RemoveSingleItem: (state) => {
        state.singleitem.length=0;
    }
  },
});

export const { UpdateSingleItem, RemoveSingleItem } = singleitemSlice.actions;
export default singleitemSlice.reducer;
