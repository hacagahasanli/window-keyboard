import { createSlice } from '@reduxjs/toolkit';
import { AddClickedKeyValueAction } from '../store-types/index';
import { validValues } from 'constants/index';
interface IKeyboardState {
    typedValue: string[];
}

const KeyboardSlice = createSlice({
    name: "KeyBoardReducer",
    initialState: {
        typedValue: []
    },
    reducers: {
        addClickedKeyValue: (state: IKeyboardState, action: AddClickedKeyValueAction) => {
            const keyValue = action.payload;
            state.typedValue.push(keyValue)
        },
        deleteValue: (state: IKeyboardState) => {
            state.typedValue.pop()
        }
    }
})

export const keyboardReducer = KeyboardSlice.reducer;
export const { addClickedKeyValue, deleteValue } = KeyboardSlice.actions