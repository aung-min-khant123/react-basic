import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

const bookSlice = createSlice ({
    name: "books",
    initialState: [],
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
        removeBook: (state, action) => {
            return state.filter ((_, index) => index !== action.payload) 
        }
    },
});
  
export const {addBook, removeBook} = bookSlice.actions;
export default bookSlice.reducer;