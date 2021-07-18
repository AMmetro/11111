import style from "./ExchangeHeader.module.css";
import React, {useEffect} from "react";
import {makeCurrencyListTodayTC} from "../../../../bll/currencyListReducer";
import {useDispatch} from "react-redux";
import Wallet from "./Wallet/Wallet";
import CurrenciesWallet from "./CurrenciesWallet/CurrenciesWallet";
import SelectCurrency from "./SelectCurrency/SelectCurrency";

const ExchangeHeader = () => {

    const dispatch = useDispatch()

    const today = new Date();
    today.setDate(today.getDate());
    const date = today.toISOString().substr(0, 10);

    useEffect(() => {
        dispatch(makeCurrencyListTodayTC(date))
    }, [date]);

    return (
        <div className={style.exchange_header_container}>

               <SelectCurrency/>

            <div className={style.exchange_header_wallets_container}>
                <CurrenciesWallet/>
                <Wallet/>
            </div>

        </div>
    )
}

export default ExchangeHeader
