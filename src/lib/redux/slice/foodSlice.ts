import { createSlice } from "@reduxjs/toolkit";

export const foodSlice = createSlice({
  name: "food",
  initialState: {
    foodName: ""
  },
  reducers: {
    setFoodName: (state, action) => {
      state.foodName = action.payload;
    }
  }
});

export const { setFoodName } = foodSlice.actions;
export const foodSelector = (state: { food: { foodName: string } }) =>
  state.food;

export const foodReducer = foodSlice.reducer;
export const foodReducerName = foodSlice.name;
