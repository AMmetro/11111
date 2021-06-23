
import {Dispatch} from 'redux'

export type walletReducerStateType = {balance: number};
const initState:walletReducerStateType = {balance:1000};

export const walletReducer = (state = initState, action: ChangeWalletBalanceType): walletReducerStateType => {
    switch (action.type) {
        case "byCurrency": {

            // найти покупаемую валюту по ИД
            // let newCurrencyAmount = action.amount * курс этой валюты
            // добавить валюту и ее кол-во в редюсер

              let newAmount = state.balance - action.amount
              return state={balance: newAmount};
        }
        case "sellCurrency": {
            let newAmount = state.balance + action.amount
            return state={balance: newAmount};
      }
        default: return state;
    }
};

// actions-------------------------------------------------------------------
type ChangeWalletBalanceType = {type: "byCurrency"|"sellCurrency", amount:number};
export const byCurrencyAC = (amount:number, currencyId:string): ChangeWalletBalanceType => {return {type:"byCurrency", amount}};
export const sellCurrencyAC = (amount:number,currencyId:string): ChangeWalletBalanceType => {return {type:"sellCurrency", amount}};

// thunks-------------------------------------------------------------------
        export const byCurrencyTC = (amaunt:number,currencyId:string) => {return (dispatch: Dispatch<any>) => {
            dispatch(byCurrencyAC(amaunt,currencyId))
      }}

        export const sellCurrencyTC = (amaunt:number,currencyId:string) => {return (dispatch: Dispatch<any>) => {
            dispatch(sellCurrencyAC(amaunt,currencyId))
  }}
