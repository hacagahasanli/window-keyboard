import { createSlice } from '@reduxjs/toolkit';

const KeyClickedSlice = createSlice({
    name: "KeyClicked",
    initialState: {
        capsClicked: false,
        shiftClicked: false,
    },
    reducers: {
        capsClickHandler: (state) => {
            state.capsClicked = !state.capsClicked
        },
        shiftClickHandler: (state) => {
            state.shiftClicked = !state.shiftClicked
            state.capsClicked = !state.capsClicked
        },
    }
})

export const keyClickedReducer = KeyClickedSlice.reducer;
export const { capsClickHandler, shiftClickHandler } = KeyClickedSlice.actions