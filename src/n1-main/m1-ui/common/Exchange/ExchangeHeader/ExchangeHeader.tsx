import style from "./ExchangeHeader.module.css";
import React, {ChangeEvent, ChangeEventHandler, EventHandler, useEffect, useState} from "react";
import {makeCurrencyListTodayTC, currencyListStateType} from "../../../../m2-bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import Wallet from "./Wallet/Wallet";
import CurrenciesWallet from "./CurrenciesWallet/CurrenciesWallet";
import SelectCurrency from "./SelectCurrency/SelectCurrency";

const ExchangeHeader = (props: any) => {

    const dispatch = useDispatch()

    const today = new Date();
    today.setDate(today.getDate());
    const date = today.toISOString().substr(0, 10);

    useEffect(() => {
        dispatch(makeCurrencyListTodayTC(date))
    }, [date]);

    return (
        <div className={style.exchange_header}>

            <SelectCurrency/>

            <div className={style.exchange_header_wallet_container}>
                <CurrenciesWallet/>
                <Wallet/>
            </div>

        </div>
    )
}

export default ExchangeHeader
