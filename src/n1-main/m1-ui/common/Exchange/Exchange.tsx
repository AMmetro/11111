
import style from "./Exchange.module.css";
import React, {ChangeEvent, ChangeEventHandler, EventHandler, useEffect, useState} from "react";
import SuperButtonContainer from "../SuperComponents/SuperButton/SuperButtonContainer";
import {makeCurrencyListTC, currencyListStateType} from "../../../m2-bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/store";
import {walletReducerStateType} from "../../../m2-bll/currencyWalletReducer";
import ExchangeHeader from "./ExchangeHeader/ExchangeHeader";
import ExchangeBody from "./ExchangeBody/ExchangeBody";


const Exchange = (props: any) => {

    return (
     <div className={style.exchange_wrapper} >
        <ExchangeHeader/>
        <ExchangeBody/>
     </div>
    )
}

export default Exchange
