import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
   tasks: [
    "Wash Plates",
    "Go to buy fish",
    "Go to church",
    "Go to pray",
  ],
  },

  reducers: {
   setTasks(state, {payload}) {
    state.tasks = payload;
   }
  },
});

export default appSlice.reducer;
export const {
 setTasks
} = appSlice.actions;
