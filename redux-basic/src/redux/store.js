import {configureStore} from "@reduxjs/toolkit"
import bookSliceReducer from "./bookslice";
import themesliceReducer from "./themeSlice";

export const store = configureStore ({
    reducer: {
        books: bookSliceReducer,
        theme: themesliceReducer
    }
})