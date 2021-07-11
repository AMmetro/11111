import {myAPI} from "../m3-dal/Api";
import {Dispatch} from 'redux';

export type currencyReceivedData = {
    Cur_Abbreviation: string, Cur_ID: number, Cur_Name: string, Cur_OfficialRate: number,
    Cur_Scale: number, Date: string
}


export type currencyListStateType = { list: Array<currencyReceivedData>, date: string };
const initState: currencyListStateType = {list: [], date: ""};

export const currencyListReducer = (state = initState, action: AddCurrencyListType): currencyListStateType => { // fix any

    switch (action.type) {
        case "setCurrencyList": {

            return state = {list: [...action.currencyList], date: action.currencyListDate};
        }

        default:
            return state;
    }
};

// actions-------------------------------------------------------------------
type AddCurrencyListType = { type: "setCurrencyList", currencyList: any, currencyListDate: string };
export const addCurrencyListAC = (currencyList: any, currencyListDate: string): any => {
    return {type: "setCurrencyList", currencyList, currencyListDate}
};


// thunks-------------------------------------------------------------------
export const makeCurrencyListTC = (currencyListDate: any) => {
    return (dispatch: Dispatch<any>) => {
        myAPI.getCurensysList(currencyListDate)
            .then((res) => {
                dispatch(addCurrencyListAC([...res.data], currencyListDate))
            })

    }
}
