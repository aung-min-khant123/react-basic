import { configureStore } from "@reduxjs/toolkit";
import PlaceSliceReducer from "./placeSlice";

export const store = configureStore({
    reducer: {
       places: PlaceSliceReducer 
    }
})