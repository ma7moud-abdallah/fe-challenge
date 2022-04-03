
import { createSlice } from "@reduxjs/toolkit";
import { allSchools } from "../constants";
import { Data } from "../data.interface";
import { fillState } from "./service";

const initialState: any = {
  countries: [],
  camps: [],
  schools: [],
  camp: "",
  country: "",
  school: "",
  data: {}
};

export const counterSlice = createSlice({
  name: "dashboardPage",
  initialState,
  reducers: {
    setAppState: (state, action) => {
      const payload = action.payload;
      const data = fillState(payload);
      state.country = data.country;
      state.countries = data.countries;
      state.camp = data.camp;
      state.camps = data.camps;
      state.schools = data.schools;
      state.data = data.data;
      state.school = allSchools;
    },
    setCountry: (state, action) => {
      const {newCountry, camps, schools} = action.payload;
      state.country = newCountry;
      state.camps = camps;
      state.camp = camps[0];
      state.schools = schools;
      state.school = allSchools;
    },
    setCamp: (state, action) => {
      const {newCamp, schools} = action.payload;
      state.camp = newCamp;
      state.schools = schools;
      state.school = allSchools;
    },
    setSchool: (state, action) => {
      const payload = action.payload;
      state.school = payload;
    },
  },
});


// Action creators are generated for each case reducer function
export const { setAppState, setCamp, setCountry, setSchool } = counterSlice.actions;

export default counterSlice.reducer;