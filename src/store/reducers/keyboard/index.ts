import { createSlice } from '@reduxjs/toolkit';
import { AddClickedKeyValueAction } from '../store-types/index';
import { validValues } from 'constants/index';
import { IKeyItemType, KeyboardKeysType } from 'types/keyboardTypes';
import { rowKeys } from 'constants/index';

interface IAllValuesAction {
    type: string;
    payload?: number
}

const KeyboardSlice = createSlice({
    name: "KeyBoardReducer",
    initialState: {
        allKeyValues: [],
        typedValue: [],
        shiftClicked: false
    },
    reducers: {
        addwholeValueToReducer: (state: any) => {
            state.allKeyValues = [...rowKeys];
        },
        addClickedKeyValue: (state: any, action: AddClickedKeyValueAction) => {
            const keyValue = action.payload;
            state.typedValue.push(keyValue)
        },
        deleteValue: (state) => {
            state.typedValue.pop()
        },
        capsClickHandler: (state) => {
            state.shiftClicked = !state.shiftClicked
        }
    }
})

export const keyboardReducer = KeyboardSlice.reducer;
export const { addClickedKeyValue, deleteValue, addwholeValueToReducer, capsClickHandler } = KeyboardSlice.actions