import {Dispatch} from 'redux'
import {changeCurrency} from './utils/exchangeLogic'
import {AppStoreType} from "./store";

export type currenciesWalletReducerStateType = { [key: string]: number };
const initState: currenciesWalletReducerStateType = {};


export const currenciesWalletReducer = (state = initState, action: ChangeWalletBalanceType): currenciesWalletReducerStateType => {

    switch (action.type) {
        case "addAdditionalCurrency": {
            if (state[action.currencyAbreviature]===undefined){
                state[action.currencyAbreviature]=0
            }
            let newCurrencyAmount = state[action.currencyAbreviature]+action.amount
            return {...state, [action.currencyAbreviature]: newCurrencyAmount}
        }

        case "removeAdditionalCurrency": {

            let newValueCurrencyAmount = state[action.currencyAbreviature] - action.amount
            if (newValueCurrencyAmount === 0) {
                let copyState = {...state}
                delete copyState[action.currencyAbreviature]
                return {...copyState }
            } else {
                return {...state, [action.currencyAbreviature]: newValueCurrencyAmount}
            }
        }
        default:
            return state;
    }
};

// actions-------------------------------------------------------------------
type ChangeWalletBalanceType = { type: "addAdditionalCurrency" | "removeAdditionalCurrency", amount: number, currencyAbreviature: string };
export const addAdditionalCurrencyAC = (amount: number, currencyAbreviature: string): ChangeWalletBalanceType => {
    return {type: "addAdditionalCurrency", amount, currencyAbreviature}
};
export const removeAdditionalCurrencyAC = (amount: number, currencyAbreviature: string): ChangeWalletBalanceType => {
    return {type: "removeAdditionalCurrency", amount, currencyAbreviature}
};

// thunks-------------------------------------------------------------------
export const addAdditionalCurrencyTC = (amount: number, currencyId: string) => {
    return (dispatch: Dispatch<any>, getState: () => AppStoreType) => {
        let currencyList = getState().currencyListReducer[0].list
        let currencyAbreviature = changeCurrency.getCurrencyAbreviature( currencyId, currencyList)
        dispatch(addAdditionalCurrencyAC(amount, currencyAbreviature))
    }
}

export const removeAdditionalCurrencyTC = (amount: number, currencyId: string) => {
    return (dispatch: Dispatch<any>, getState: () => AppStoreType) => {
        let currencyList = getState().currencyListReducer[0].list
        let currencyAbreviature = changeCurrency.getCurrencyAbreviature( currencyId, currencyList)
        dispatch(removeAdditionalCurrencyAC(amount, currencyAbreviature))
    }
}


