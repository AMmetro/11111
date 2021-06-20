import {combineReducers, createStore, applyMiddleware, Store} from "redux"
import thunkMiddleware from 'redux-thunk'
import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import {currencyListReducer} from "./currencyListReducer";
import {currencyChartReducer} from "./currencyChartReducer";

const rootReducer = combineReducers({
    currencyListReducer: currencyListReducer,
    currencyChartReducer: currencyChartReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev
