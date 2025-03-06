import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [], // Orders will be stored here
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    UpdateCategory: (state, action) => {
      state.category.push(action.payload);
    },
    removecategory: (state, action) => {
        state.category.length=0;
    }
  },
});

export const { UpdateCategory, removecategory } = categorySlice.actions;
export default categorySlice.reducer;
