
import {Dispatch} from 'redux'

export type controlTradeUserinterfaceReducerStateType = {controlTradeBuyUIStatus:string,
     controlTradeSellUIStatus:string,
     controlTradeBuyAnimationUIStatus:string,
     controlTradeSellAnimationUIStatus:string
     };
const initState:controlTradeUserinterfaceReducerStateType = {controlTradeBuyUIStatus:"prohibited",
 controlTradeSellUIStatus:"prohibited",
 controlTradeBuyAnimationUIStatus:"false",
 controlTradeSellAnimationUIStatus:"false"
};

export const controlTradeUserInterfaceReducer = (state = initState, action: controlTradeUiACType): controlTradeUserinterfaceReducerStateType => {


    switch (action.type) {
        case "setControlBuyStatus": {
             return {...state, controlTradeBuyUIStatus: action.controlTradeUIStatus}
        }

        case "setControlSellStatus":{
            return {...state, controlTradeSellUIStatus: action.controlTradeUIStatus}
        }

        case "setControlBuyAnimationStatus":{
            return {...state, controlTradeBuyAnimationUIStatus: action.controlTradeUIStatus}
        }

        case "setControlSellAnimationStatus":{
            return {...state, controlTradeSellAnimationUIStatus: action.controlTradeUIStatus}
        }

        default: return state;
    }
};

// actions-------------------------------------------------------------------
type controlTradeUiACType = {type: "setControlBuyStatus"|"setControlSellStatus"|"setControlBuyAnimationStatus"|"setControlSellAnimationStatus",
                              controlTradeUIStatus:string};
export const controlTradeBuyUiAC = (controlTradeUIStatus:string): controlTradeUiACType => {return {type:"setControlBuyStatus", controlTradeUIStatus}};
export const controlTradeSellUiAC = (controlTradeUIStatus:string): controlTradeUiACType => {return {type:"setControlSellStatus", controlTradeUIStatus}};
export const controlTradeBuyAnimationUiAC = (controlTradeUIStatus:string): controlTradeUiACType => {return {type:"setControlBuyAnimationStatus", controlTradeUIStatus}};
export const controlTradeSellAnimationUiAC = (controlTradeUIStatus:string): controlTradeUiACType => {return {type:"setControlSellAnimationStatus", controlTradeUIStatus}};

// thunks-------------------------------------------------------------------

    export const controlTradeBuyUiTC = (controlBuyStatus:string) => {return (dispatch: Dispatch<controlTradeUiACType>) => {
        dispatch(controlTradeBuyUiAC(controlBuyStatus))
    }}

    export const controlTradeSellUiTC = (controlSellStatus:string) => {return (dispatch: Dispatch<controlTradeUiACType>) => {
        dispatch(controlTradeSellUiAC(controlSellStatus))
    }}

    export const controlTradeBuyAnimationUiTC = (controlBuyAnimationStatus:string) => {return (dispatch: Dispatch<controlTradeUiACType>) => {
        dispatch(controlTradeBuyAnimationUiAC(controlBuyAnimationStatus))
    }}

    export const controlTradeSellAnimationUiTC = (controlBuyAnimationStatus:string) => {return (dispatch: Dispatch<controlTradeUiACType>) => {
        dispatch(controlTradeSellAnimationUiAC(controlBuyAnimationStatus))
    }}

