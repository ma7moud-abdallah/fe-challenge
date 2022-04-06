
import { createSlice } from "@reduxjs/toolkit";
import { allSchools, ChartLabels } from "../common/constants";
import { Chart } from "../components/charts.interface";
import { fillState } from "./service";

const initialState: any = {
  countries: [],
  camps: [],
  schools: [],
  camp: "",
  country: "",
  school: "",
  data: {},
  activeSchools: [],
  chartData: new Chart(ChartLabels)
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
      state.activeSchools = payload !== allSchools ? [payload] : state.activeSchools;
      state.school = payload;
    },
    resetActiveSchools: (state, action) => {
      state.activeSchools = [];
    },
    updateActiveSchool: (state, action) => {
      const payload = action.payload;
      let schools = state.activeSchools;
      state.activeSchools = [...schools, payload];
    },
    addeActiveSchool: (state, action) => {
      const payload = action.payload;
      state.activeSchools = [payload];
    },
    removeActiveSchool: (state, action) => {
      const payload = action.payload;
      let schools = state.activeSchools.filter((school: string) => school !== payload);
      state.activeSchools = [...schools];
    },
    resetChart: (state, action) => {
      state.chartData = new Chart(ChartLabels);
    },
    updateCharData: (state, action) => {
      const payload = action.payload;
      state.chartData = {...state.chartData, datasets: payload};
    }
  },
});


// Action creators are generated for each case reducer function
export const { setAppState, setCamp, setCountry, setSchool, updateActiveSchool, removeActiveSchool, resetActiveSchools, resetChart, updateCharData, addeActiveSchool } = counterSlice.actions;

export default counterSlice.reducer;