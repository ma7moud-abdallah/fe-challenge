import { configureStore } from "@reduxjs/toolkit";
import analysisReducer from "./reducers";

export default configureStore({
  reducer: { analysis: analysisReducer },
});