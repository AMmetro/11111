import {combineReducers, createStore, applyMiddleware, Store} from "redux"
import thunkMiddleware from 'redux-thunk'


import {currencyListReducer} from "./currencyListReducer";
import {currencyChartReducer} from "./currencyChartReducer";
import {currenciesWalletReducer} from "./currenciesWalletReducer";

import {walletReducer} from "./walletReducer";
import {holderTradeValueReducer} from "./holderTradeValueReducer";
import {controlTradeUserInterfaceReducer} from "./controlTradeUserInterfaceReducer";

const rootReducer = combineReducers({
    currencyListReducer: currencyListReducer,
    currencyChartReducer: currencyChartReducer,
    walletReducer: walletReducer,
    currenciesWalletReducer: currenciesWalletReducer,
    holderTradeValueReducer: holderTradeValueReducer,
    controlTradeUserInterfaceReducer:controlTradeUserInterfaceReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev
