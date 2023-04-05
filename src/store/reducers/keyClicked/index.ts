import { createSlice } from '@reduxjs/toolkit';

interface IKeyCombination {
    type: string;
    payload: string;
}

const KeyClickedSlice = createSlice({
    name: "KeyClicked",
    initialState: {
        capsClicked: false,
        shiftClicked: false,
        keyCombination: []
    },
    reducers: {
        capsClickHandler: (state) => {
            state.capsClicked = !state.capsClicked
        },
        shiftClickHandler: (state) => {
            state.shiftClicked = !state.shiftClicked
            state.capsClicked = !state.capsClicked
        },
        addKeyCombination: (state: any, action: IKeyCombination) => {
            const key = action.payload;
            state.keyCombination = [...state.keyCombination, key]
        }
    }
})

export const keyClickedReducer = KeyClickedSlice.reducer;
export const { capsClickHandler, shiftClickHandler } = KeyClickedSlice.actions