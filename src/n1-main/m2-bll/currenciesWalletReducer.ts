
import {Dispatch} from 'redux'
import {changeCurrency} from './utils/exchangeLogic'
import {AppStoreType} from "./store";



export type currenciesWalletReducerStateType = {[key: string]: number};
const initState:currenciesWalletReducerStateType = {};


export const currenciesWalletReducer = (state = initState, action: ChangeWalletBalanceType): currenciesWalletReducerStateType => {
    switch (action.type) {
        case "buyAdditionalCurrency": {

            // delete state.USD
            return {...state, [action.currencyAbreviature]: action.amount}
             }

        case "sellCurrency": {
            // let newAmount = state.balance + action.amount
             return state
            //
      }
        default: return state;
    }
};

// actions-------------------------------------------------------------------
type ChangeWalletBalanceType = {type: "buyAdditionalCurrency"|"sellCurrency", amount:number, currencyAbreviature:string};
export const buyAdditionalCurrencyAC = (amount:number, currencyAbreviature:string): ChangeWalletBalanceType => {return {type:"buyAdditionalCurrency", amount, currencyAbreviature}};
export const sellCurrencyAC = (amount:number,currencyAbreviature:string): ChangeWalletBalanceType => {return {type:"sellCurrency", amount, currencyAbreviature}};

// thunks-------------------------------------------------------------------
        export const buyAdditionalCurrencyTC = (amount:number, currencyId:string) => {return (dispatch: Dispatch<any>, getState: () => AppStoreType) => {
            let currencyList = getState().currencyListReducer.list
             let currencyAbreviature = changeCurrency.getAbreviature(amount, currencyId, currencyList)
             dispatch(buyAdditionalCurrencyAC(amount, currencyAbreviature))
      }}


