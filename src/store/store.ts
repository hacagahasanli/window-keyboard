import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { keyboardReducer } from "./reducers";

const rootReducer = combineReducers({
    keyboard: keyboardReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;