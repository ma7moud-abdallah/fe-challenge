
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
    setData: (state, action) => {
      const payload = action.payload;
      console.log('from rr', payload)
      state.data = payload;
    },
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
export const { setData, setCamp, setCountry, setSchool } = counterSlice.actions;

export default counterSlice.reducer;