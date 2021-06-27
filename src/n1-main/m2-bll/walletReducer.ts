
import {Dispatch} from 'redux'
import {changeCurrency} from './utils/exchangeLogic'
import {AppStoreType} from "./store";

export type walletReducerStateType = {BYN: number};
const initState:walletReducerStateType = {BYN:1000};

export const walletReducer = (state = initState, action: ChangeWalletBalanceType): walletReducerStateType => {
    switch (action.type) {
        case "buyCurrency": {
              let newAmount = state.BYN - action.currencyPrice
              return {...state, BYN: newAmount}
        }
        case "sellCurrency": {
            let newAmount = state.BYN + action.currencyPrice
            return {...state, BYN: newAmount}
      }
        default: return state;
    }
};

// actions-------------------------------------------------------------------
type ChangeWalletBalanceType = {type: "buyCurrency"|"sellCurrency", currencyPrice:number};
export const buyCurrencyAC = ( currencyPrice:number): ChangeWalletBalanceType => {return {type:"buyCurrency", currencyPrice}};
export const sellCurrencyAC = (currencyPrice:number): ChangeWalletBalanceType => {return {type:"sellCurrency", currencyPrice}};

// thunks-------------------------------------------------------------------
    export const buyCurrencyTC = (amount:number,currencyId:string) => {return (dispatch: Dispatch<any>, getState: () => AppStoreType) => {
        let currencyList = getState().currencyListReducer.list
        let currencyPrice = changeCurrency.getBoughtCurrencyPrice(amount, currencyId, currencyList)
        dispatch(buyCurrencyAC(currencyPrice))
    }}


    export const sellCurrencyTC = (amount:number,currencyId:string) => {return (dispatch: Dispatch<any>, getState: () => AppStoreType) => {
        let currencyList = getState().currencyListReducer.list
        let currencyPrice = changeCurrency.getBoughtCurrencyPrice(amount, currencyId, currencyList)
        dispatch(sellCurrencyAC(currencyPrice))
    }}

