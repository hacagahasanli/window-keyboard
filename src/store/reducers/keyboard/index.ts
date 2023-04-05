import { createSlice } from '@reduxjs/toolkit';
import { AddClickedKeyValueAction } from '../store-types/index';
import { letters, rowKeys } from 'constants/index';

interface IDeleteAction {
    type: string;
    payload: {
        type: string
    }
}
interface IAnyAction {
    type: string;
    payload: string;
}

const KeyboardSlice = createSlice({
    name: "KeyBoardReducer",
    initialState: {
        allKeyValues: [],
        typedValue: [],
        keyCombination: [],
        joinedValue: "",
    },
    reducers: {
        addwholeValueToReducer: (state: any) => {
            state.allKeyValues = [...rowKeys];
        },
        addClickedKeyValue: (state: any, action: AddClickedKeyValueAction) => {
            const { subName, name, capsClicked, shiftClicked, texts } = action.payload;
            const hasSubName = !(!subName);
            const key = state.keyCombination.join("")

            key === "ctrlv" && (texts?.split('')
                .map((text: string) => state.typedValue.push(text)))

            if (key !== "ctrlc" && key !== "ctrlv") {
                const addTypeValue = (name: string) =>
                    state.typedValue = [...state.typedValue, name]

                if ((capsClicked || shiftClicked) && letters.includes(name)) {
                    const upperName: string = name.toUpperCase()
                    addTypeValue(upperName)
                }
                else {
                    (shiftClicked && hasSubName)
                        ? state.typedValue.push(name)
                        : (hasSubName)
                            ? addTypeValue(subName)
                            : addTypeValue(name)
                }
            }

        },
        addAnyKey: (state: any, action: IAnyAction) => {
            const name: string = action.payload;
            const keyKeeper = (name: string) =>
                state.keyCombination = [...state.keyCombination, name.toLowerCase()]

            if (state.keyCombination.length === 2) {
                state.keyCombination.shift()
                keyKeeper(name)
            }
            else
                keyKeeper(name)

            state.joinedValue = state.keyCombination.join('')
        },
        deleteValue: (state: any, action: IDeleteAction) => {
            const { type } = action.payload;
            type === "delete"
                ? state.typedValue.pop()
                : state.typedValue = []
        },
        pasteValue: {
            reducer: (state: any, action: any) => {
                // Add the clipboard text to the state
                state.joinedValue.push(action.payload);
            },
            prepare: () => {
                const clipboardText = navigator.clipboard.readText().then(text => text);
                return {
                    payload: clipboardText
                };
            },
        }
    }
})

export const keyboardReducer = KeyboardSlice.reducer;
export const {
    addClickedKeyValue,
    deleteValue,
    addwholeValueToReducer,
    addAnyKey,
    pasteValue
} = KeyboardSlice.actions