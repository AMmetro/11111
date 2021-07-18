import style from "./SelectCurency.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import {makeCurrencyListTodayTC, currencyListStateType} from "../../../../../bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../../bll/store";
import {withdrawalMoneyTC, enrolledMoneyTC} from "../../../../../bll/walletReducer";
import {holderTradeAmountTC} from "../../../../../bll/holderTradeValueReducer";
import {addAdditionalCurrencyTC} from "../../../../../bll/currenciesWalletReducer";
import {removeAdditionalCurrencyTC} from "../../../../../bll/currenciesWalletReducer";
import {
    controlTradeBuyUiTC,
    controlTradeSellUiTC,
    controlTradeBuyAnimationUiTC,
    controlTradeUserinterfaceReducerStateType, controlTradeSellAnimationUiTC
} from "../../../../../bll/controlTradeUserInterfaceReducer";


const SelectCurrency = () => {
    const [amountTradedCurrency, setAmountTradedCurrency] = useState<number>(0);
    const [selectedCurrency, setSelectedCurrency] = useState<boolean>(false);
    const currencyList = useSelector<AppStoreType, currencyListStateType>(state => state.currencyListReducer)
    const [currencyId, setCurrencyId] = useState<string>("");

    const controlUserinterface = useSelector<AppStoreType, controlTradeUserinterfaceReducerStateType>(state => state.controlTradeUserInterfaceReducer)
    const dispatch = useDispatch();

    let buttonBuyDisabled = (controlUserinterface.controlTradeBuyUIStatus === "prohibited") ? true : false;
    let buttonSellDisabled = (controlUserinterface.controlTradeSellUIStatus === "prohibited") ? true : false;


    const today = new Date();
    today.setDate(today.getDate());
    const date = today.toISOString().substr(0, 10);

    useEffect(() => {
        dispatch(makeCurrencyListTodayTC(date));

        if (!selectedCurrency) {
            dispatch(controlTradeBuyUiTC("prohibited"));
            dispatch(controlTradeSellUiTC("prohibited"));
        }

    }, [date]);

// -------------control if some currency selected from list------------------------
    const selectDropCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.currentTarget.value.length < 4) {  // if lenth > 3 currency is not selected
            setSelectedCurrency(true);
            setCurrencyId(e.currentTarget.value);
        } else {
            dispatch(controlTradeBuyUiTC("prohibited"));
            dispatch(controlTradeSellUiTC("prohibited"));
            setSelectedCurrency(false);
        }
    }


    const buyCurrency = () => {
        dispatch(withdrawalMoneyTC(amountTradedCurrency, currencyId));
        dispatch(addAdditionalCurrencyTC(amountTradedCurrency, currencyId));
        setAmountTradedCurrency(0);
        turnOnControlBuyAnimationCurrency();
    }

    const sellCurrency = () => {
        dispatch(enrolledMoneyTC(amountTradedCurrency, currencyId));
        dispatch(removeAdditionalCurrencyTC(amountTradedCurrency, currencyId));
        setAmountTradedCurrency(0);
        turnOnControlSellAnimationCurrency();
    }


// ----------------------ANIMATION----------------------------------------------------


    const turnOnControlBuyAnimationCurrency = () => {
        dispatch(controlTradeBuyAnimationUiTC("true"));
        setTimeout(() => dispatch(controlTradeBuyAnimationUiTC("false")), 3100);
    }

    const turnOnControlSellAnimationCurrency = () => {
        dispatch(controlTradeSellAnimationUiTC("true"));
        setTimeout(() => dispatch(controlTradeSellAnimationUiTC("false")), 3100);
    }

 // ------------------------------------------------------------------------

    const enterAmount = (e: ChangeEvent<HTMLInputElement>) => {

        setAmountTradedCurrency(+e.currentTarget.value);
        dispatch(holderTradeAmountTC(+e.currentTarget.value, currencyId));
    }


    const currencyListName = currencyList[0].list.map(elem =>
        <option key={elem.Cur_Abbreviation}
                value={elem.Cur_ID}
        >
            {elem.Cur_Name}
        </option>
    )


    return (

        <div className={style.selectCurency_container}>
            <div className={style.inputCurency_wrapper} >
                <div>
                    <span className={`${selectedCurrency ? style.hint_valid : style.hint_error} `}>
                             Select currency
                    </span>
                    <br/>
                    <select
                        className={style.select_currency}
                        onChange={selectDropCurrency}>
                        <option> - no selected -</option>
                        {currencyListName}
                    </select>
                </div>
                <div>
                    <span>Amount</span> <br/>
                    <input type="number"
                           min="1"
                           value={amountTradedCurrency}
                           className={style.select_amount}
                           onChange={(e) => enterAmount(e)}
                           disabled={!selectedCurrency}
                    />
                </div>
            </div>
            <div>
                <div className={style.button_wrapper}>
                    <button className={"superButton"} onClick={buyCurrency} disabled={buttonBuyDisabled}>Buy</button>
                    <button className={"superButton"} onClick={sellCurrency} disabled={buttonSellDisabled}>Sell</button>
                </div>
            </div>
        </div>
    )
}

export default SelectCurrency
