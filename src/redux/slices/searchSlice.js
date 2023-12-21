import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchFilter: "title",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setSearchFilter } = searchSlice.actions;
