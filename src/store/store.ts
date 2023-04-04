import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { keyboardReducer, keyClickedReducer } from "./reducers";

const rootReducer = combineReducers({
    keyboard: keyboardReducer,
    keyClicked: keyClickedReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;