import { configureStore } from "@reduxjs/toolkit";
import mapReducer from './slices/map-slice';

const store = configureStore({
  reducer: { mapUi: mapReducer},
});

export default store;