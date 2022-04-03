import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./reducers";

export default configureStore({
  reducer: { data: dashboardReducer },
});