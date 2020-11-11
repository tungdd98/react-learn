import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    display: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.display = action.payload;
    },
  },
});
const { actions, reducer } = loadingSlice;
export const { setLoading } = actions;

export default reducer;
