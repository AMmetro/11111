
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
export const withdrawalMoneyAC = ( currencyPrice:number): ChangeWalletBalanceType => {return {type:"buyCurrency", currencyPrice}};
export const enrolledMoneyAC = (currencyPrice:number): ChangeWalletBalanceType => {return {type:"sellCurrency", currencyPrice}};

// thunks-------------------------------------------------------------------
    export const withdrawalMoneyTC = (amount:number,currencyId:string) => {return (dispatch: Dispatch<any>, getState: () => AppStoreType) => {
        let currencyList = getState().currencyListReducer.list
        let currencyPrice = changeCurrency.getTradetCurrencyPrice(amount, currencyId, currencyList)
        dispatch(withdrawalMoneyAC(currencyPrice))
    }}


    export const enrolledMoneyTC = (amount:number,currencyId:string) => {return (dispatch: Dispatch<any>, getState: () => AppStoreType) => {
        let currencyList = getState().currencyListReducer.list
        let currencyPrice = changeCurrency.getTradetCurrencyPrice(amount, currencyId, currencyList)
        dispatch(enrolledMoneyAC(currencyPrice))
    }}

