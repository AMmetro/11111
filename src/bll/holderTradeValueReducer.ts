
import {Dispatch} from 'redux'
import {changeCurrency} from './utils/exchangeLogic'
import {AppStoreType} from "./store";

export type holderTradeValueReducerStateType = {currencyPrice: number, amount:number,currencyAbbreviation:string};
const initState:holderTradeValueReducerStateType = {currencyPrice: 0, amount:0, currencyAbbreviation:""};

export const holderTradeValueReducer = (state = initState, action: holderTradeValueACType): holderTradeValueReducerStateType => {

    switch (action.type) {
        case "holdTradeValueCurrency": {
              return {...state, currencyPrice: action.currencyPrice, amount:action.amount, currencyAbbreviation:action.currencyAbbreviation}
        }
        default: return state;
    }
};

// actions-------------------------------------------------------------------
type holderTradeValueACType = {type: "holdTradeValueCurrency", currencyPrice:number, amount:number, currencyAbbreviation:string};
export const holderTradeValueAC = (currencyPrice:number, amount:number, currencyAbbreviation:string): holderTradeValueACType => {return {type:"holdTradeValueCurrency", currencyPrice, amount,currencyAbbreviation}};

// thunks-------------------------------------------------------------------
    export const holderTradeAmountTC = (amount:number,currencyId:string) => {return (dispatch: Dispatch<holderTradeValueACType>, getState: () => AppStoreType) => {
        let currencyList = getState().currencyListReducer[0].list
        let currencyPrice = changeCurrency.getTradetCurrencyPrice(amount, currencyId, currencyList)
        let currencyAbbreviation = changeCurrency.getCurrencyAbreviature (currencyId, currencyList)
        dispatch(holderTradeValueAC(currencyPrice, amount, currencyAbbreviation))
    }}


