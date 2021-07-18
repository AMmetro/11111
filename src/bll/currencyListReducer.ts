import {myAPI} from "../dal/Api";
import {Dispatch} from 'redux';

export type currencyReceivedData = {
    Cur_Abbreviation: string, Cur_ID: number, Cur_Name: string, Cur_OfficialRate: number,
    Cur_Scale: number, Date: string
}

export type currencyListStateType = [{ list: Array<currencyReceivedData>, date: string },{ list: Array<currencyReceivedData>, date: string }];
const initState: currencyListStateType = [{list: [], date: ""},{list: [], date: ""}];

export const currencyListReducer = (state = initState, action: AddCurrencyListType): currencyListStateType => {

    switch (action.type)
    {
        case "setCurrencyListToday": {
            state[0]={list: [...action.currencyList], date: action.currencyListDate};
          return [...state]
        }

        case "setCurrencyListTomorrow": {
            state[1]={list: [...action.currencyList], date: action.currencyListDate};
            return [...state]
        }

        default:
            return [...state];
    }

};

// actions-------------------------------------------------------------------
type AddCurrencyListType = { type: "setCurrencyListToday"|"setCurrencyListTomorrow",
 currencyList:  Array<currencyReceivedData>, currencyListDate: string };

export const addCurrencyListTodayAC = (currencyList: Array<currencyReceivedData>, currencyListDate: string): AddCurrencyListType => {
    return {type: "setCurrencyListToday", currencyList, currencyListDate}
};
export const addCurrencyListTomorrowAC = (currencyList: Array<currencyReceivedData>, currencyListDate: string): AddCurrencyListType => {
    return {type: "setCurrencyListTomorrow", currencyList, currencyListDate}
};

// thunks-------------------------------------------------------------------
export const makeCurrencyListTodayTC = (currencyListDate: string) => {
    return (dispatch: Dispatch<AddCurrencyListType>) => {

       (async ()=>{
            try {
                let temp=await myAPI.getCurensysList(currencyListDate)
                dispatch(addCurrencyListTodayAC([...temp.data], currencyListDate))
            } catch(err) {
                console.log(err);
            }
        })();
    }
}

export const makeCurrencyListTomorrowDateTC = (currencyListDate: string) => {
    return (dispatch: Dispatch<AddCurrencyListType>) => {
        (async function (){
            try {
                myAPI.getCurensysList(currencyListDate)
                .then((res) => {
                    dispatch(addCurrencyListTomorrowAC([...res.data], currencyListDate))
                })
            } catch(err) {
                console.log(err);
            }
        })();

   }
}
