import { createSlice } from '@reduxjs/toolkit';
import { AddClickedKeyValueAction } from '../store-types/index';
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
        }
    }
})

export const keyboardReducer = KeyboardSlice.reducer;
export const { addClickedKeyValue } = KeyboardSlice.actions