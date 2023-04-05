import { createSlice } from '@reduxjs/toolkit';
import { AddClickedKeyValueAction } from '../store-types/index';
import { letters, rowKeys } from 'constants/index';

interface IDeleteAction {
    type: string;
    payload: {
        type: string
    }
}

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

            const addTypeValue = (name: string) => {
                state.typedValue = [...state.typedValue, name]
            }

            if ((capsClicked || shiftClicked) && letters.includes(name)) {
                const upperName = name.toUpperCase()
                addTypeValue(upperName)
            }
            else if (shiftClicked && hasSubName)
                state.typedValue.push(name)
            else if (hasSubName)
                addTypeValue(subName)
            else
                addTypeValue(name)
        },
        deleteValue: (state: any, action: IDeleteAction) => {
            const { type } = action.payload;
            type === "delete"
                ? state.typedValue.pop()
                : state.typedValue = []
        },
    }
})

export const keyboardReducer = KeyboardSlice.reducer;
export const {
    addClickedKeyValue,
    deleteValue,
    addwholeValueToReducer,
} = KeyboardSlice.actions