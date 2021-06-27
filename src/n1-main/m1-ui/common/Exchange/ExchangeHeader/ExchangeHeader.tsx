import style from "./ExchangeHeader.module.css";
import React, {ChangeEvent, ChangeEventHandler, EventHandler, useEffect, useState} from "react";
import SuperButtonContainer from "../../SuperComponents/SuperButton/SuperButtonContainer";
import {makeCurrencyListTC, currencyListStateType} from "../../../../m2-bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../m2-bll/store";
import {buyCurrencyTC, sellCurrencyTC} from "../../../../m2-bll/walletReducer";
import Wallet from "./Wallet/Wallet";
import CurrenciesWallet from "./CurrenciesWallet/CurrenciesWallet";
import SelectCurrency from "./SelectCurrency/SelectCurrency";


const ExchangeHeader = (props: any) => {

    const dispatch = useDispatch()

    const today = new Date();
    today.setDate(today.getDate());
    const date = today.toISOString().substr(0, 10);

    useEffect(() => {
        dispatch(makeCurrencyListTC(date))
    }, [date]);

    return (
        <div className={style.exchange_header}>
            <SelectCurrency/>
            <CurrenciesWallet/>
            <Wallet/>

        </div>
    )
}

export default ExchangeHeader
