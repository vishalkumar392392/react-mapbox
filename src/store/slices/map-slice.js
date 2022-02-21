import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    latitude: 38.578433,
    longitude: -121.499908,
    zoom: 12.5,
    bearing: 0,
    pitch: 0,
  }

const mapSlice =  createSlice({
    initialState: initialState,
    name:'updateMapUI',
    reducers: {
        updateMap(state,action){
            console.log(action);
            state.latitude = action.payload.lat;
            state.longitude = action.payload.lon;
            state.zoom = 13.5
        }
    }

})
export const mapActions = mapSlice.actions;
export default mapSlice.reducer;