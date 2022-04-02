
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  data: {},
  camp: "",
  country: "",
  school: "",
};

export const counterSlice = createSlice({
  name: "dashboardPage",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      const payload = action.payload;
      state.country = payload;
    },
    setCamp: (state, action) => {
      const payload = action.payload;
      state.camp = payload;
    },
    setSchool: (state, action) => {
      const payload = action.payload;
      state.school = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCamp, setCountry, setSchool } =
  counterSlice.actions;

export default counterSlice.reducer;