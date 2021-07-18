import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../../bll/store";
import {walletReducerStateType} from "../../../../../bll/walletReducer";
import {holderTradeValueReducerStateType} from "../../../../../bll/holderTradeValueReducer";
import { controlTradeBuyUiTC, controlTradeSellUiTC,
       } from "../../../../../bll/controlTradeUserInterfaceReducer";
import {currenciesWalletReducerStateType} from "../../../../../bll/currenciesWalletReducer";


const Prompt = () => {

    const tradeCurrencyValue = useSelector<AppStoreType, holderTradeValueReducerStateType>(state => state.holderTradeValueReducer)
    const wallet = useSelector<AppStoreType, walletReducerStateType>(state => state.walletReducer)
    const currenciesWalletValue = useSelector<AppStoreType, currenciesWalletReducerStateType>(state => state.currenciesWalletReducer)

    const dispatch = useDispatch()

     let tradeSellProhibited:boolean = currenciesWalletValue[tradeCurrencyValue.currencyAbbreviation] < tradeCurrencyValue.amount;
     if (currenciesWalletValue[tradeCurrencyValue.currencyAbbreviation]===undefined) {
         tradeSellProhibited =  true}

     let tradeBuyProhibited:boolean =  wallet.BYN < tradeCurrencyValue.currencyPrice


    useEffect(() =>{

        if (tradeSellProhibited) {
            dispatch(controlTradeSellUiTC("prohibited"))
        }
        else {
            dispatch(controlTradeSellUiTC("allowed"))
        }

        if (tradeBuyProhibited) {
            dispatch(controlTradeBuyUiTC("prohibited"))
        }
        else {
            dispatch(controlTradeBuyUiTC("allowed"))
        }
          }, [tradeCurrencyValue]);


    return (
        <div>

        </div>

    )
}

export default Prompt
