import {myAPI} from "../m3-dal/Api";
import {Dispatch} from 'redux';

export type currencyReceivedData = {
    Cur_Abbreviation: string, Cur_ID: number, Cur_Name: string, Cur_OfficialRate: number,
    Cur_Scale: number, Date: string
}

export type currencyListStateType = [{ list: Array<currencyReceivedData>, date: string },{ list: Array<currencyReceivedData>, date: string }];
const initState: currencyListStateType = [{list: [], date: ""},{list: [], date: ""}];

export const currencyListReducer = (state = initState, action: AddCurrencyListType): currencyListStateType => { // fix any

    switch (action.type)

    {

        case "setCurrencyListToday": {
            state[0]={list: [...action.currencyList], date: action.currencyListDate};
          return [...state]
        }

        case "setCurrencyListYestoday": {
            state[1]={list: [...action.currencyList], date: action.currencyListDate};
            return state
        }

        default:
            return [...state];
    }

};

// actions-------------------------------------------------------------------
type AddCurrencyListType = { type: "setCurrencyListToday"|"setCurrencyListYestoday", currencyList: any, currencyListDate: string };
export const addCurrencyListTodayAC = (currencyList: any, currencyListDate: string): any => {
    return {type: "setCurrencyListToday", currencyList, currencyListDate}
};
export const addCurrencyListYestodayAC = (currencyList: any, currencyListDate: string): any => {
    return {type: "setCurrencyListYestoday", currencyList, currencyListDate}
};


// thunks-------------------------------------------------------------------
export const makeCurrencyListTodayTC = (currencyListDate: any) => {
    return (dispatch: Dispatch<any>) => {
        myAPI.getCurensysList(currencyListDate)
            .then((res) => {
                dispatch(addCurrencyListTodayAC([...res.data], currencyListDate))
            })
    }
}

export const makeCurrencyListYesterdayTC = (currencyListDate: any) => {
    return (dispatch: Dispatch<any>) => {
        myAPI.getCurensysList(currencyListDate)
            .then((res) => {
                dispatch(addCurrencyListYestodayAC([...res.data], currencyListDate))
            })
    }
}
