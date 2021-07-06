import {Dispatch} from "redux";
import {myAPI} from "../m3-dal/Api";

export type currencyChartStateType = {value:[] ,currencyId:any, dateFrom:any, dateTill:any};
const initState:currencyChartStateType = {value:[],currencyId:"", dateFrom:"", dateTill:""};

export const currencyChartReducer = (state = initState, action: AddCurrencyChartType): currencyChartStateType => { // fix any
    switch (action.type) {
        case "setCurrencyChart": {

            return state={value:action.rateData,currencyId:action.currencyId, dateFrom:action.dateFrom, dateTill:action.dateTill};
        }

        default: return state;
    }
};

// actions-------------------------------------------------------------------

type AddCurrencyChartType = {type: string,rateData:any,currencyId:any, dateFrom:any, dateTill:any};
export const addCurrencyChartAC = (rateData:any,currencyId:any, dateFrom:any, dateTill:any): AddCurrencyChartType => {return {type:"setCurrencyChart",
    rateData,currencyId, dateFrom, dateTill}};

//thunks-------------------------------------------------------------------

export const makeChartsTC = (currencyId:string, dateFrom:string, dateTill:string) => {return (dispatch: Dispatch<any>) => {

    myAPI.getChartData(currencyId, dateFrom, dateTill)
        .then( (res) => {
            dispatch(addCurrencyChartAC([...res.data],currencyId, dateFrom, dateTill))
        } )

}
}

