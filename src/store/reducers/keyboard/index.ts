import { createSlice } from '@reduxjs/toolkit';
import { AddClickedKeyValueAction } from '../store-types/index';
import { letters, rowKeys } from 'constants/index';

const KeyboardSlice = createSlice({
    name: "KeyBoardReducer",
    initialState: {
        allKeyValues: [],
        typedValue: [],
    },
    reducers: {
        addwholeValueToReducer: (state: any) => {
            state.allKeyValues = [...rowKeys];
        },
        addClickedKeyValue: (state: any, action: AddClickedKeyValueAction) => {
            const { name, capsClicked, shiftClicked } = action.payload;
            if ((capsClicked || shiftClicked) && letters.includes(name)) {
                const upperName = name.toUpperCase()
                state.typedValue = [...state.typedValue, upperName]
            } else
                state.typedValue = [...state.typedValue, name]
        },
        deleteValue: (state) => {
            state.typedValue.pop()
        },
    }
})

export const keyboardReducer = KeyboardSlice.reducer;
export const {
    addClickedKeyValue,
    deleteValue,
    addwholeValueToReducer,
} = KeyboardSlice.actions