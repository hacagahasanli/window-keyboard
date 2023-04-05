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
            const { subName, name, capsClicked, shiftClicked } = action.payload;
            const hasSubName = !(!subName);

            if ((capsClicked || shiftClicked) && letters.includes(name)) {
                const upperName = name.toUpperCase()
                state.typedValue = [...state.typedValue, upperName]
            }
            else if (shiftClicked && hasSubName)
                state.typedValue.push(name)

            else if (hasSubName)
                state.typedValue = [...state.typedValue, subName]
                
            else
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