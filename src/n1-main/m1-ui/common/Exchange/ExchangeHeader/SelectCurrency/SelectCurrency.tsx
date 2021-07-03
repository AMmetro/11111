import style from "./SelectCurency.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import {makeCurrencyListTC, currencyListStateType} from "../../../../../m2-bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../../m2-bll/store";
import {withdrawalMoneyTC, enrolledMoneyTC} from "../../../../../m2-bll/walletReducer";
import {holderTradeAmountTC} from "../../../../../m2-bll/holderTradeValueReducer";
import {addAdditionalCurrencyTC, currenciesWalletReducerStateType} from "../../../../../m2-bll/currenciesWalletReducer";
import {removeAdditionalCurrencyTC} from "../../../../../m2-bll/currenciesWalletReducer";
import {controlTradeUserinterfaceReducerStateType} from "../../../../../m2-bll/controlTradeUserInterfaceReducer";


const SelectCurrency = (props: any) => {
    const [amountTradedCurrency, setAmountTradedCurrency] = useState<any>();
    const currencyList = useSelector<AppStoreType, currencyListStateType>(state => state.currencyListReducer)
    const [currencyId, setCurrencyId] = useState<string>("");

    const controlUserinterface = useSelector<AppStoreType, controlTradeUserinterfaceReducerStateType>(state => state.controlTradeUserInterfaceReducer)
    const dispatch = useDispatch()

    let buttonBuyDisabled = (controlUserinterface.controlTradeBuyUIStatus === "prohibited") ? true : false
    let buttonSellDisabled = (controlUserinterface.controlTradeSellUIStatus === "prohibited") ? true : false


    const today = new Date();
    today.setDate(today.getDate());
    const date = today.toISOString().substr(0, 10);

    useEffect(() => {
        dispatch(makeCurrencyListTC(date))
    }, [date]);

    const selectDropChart = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrencyId(e.currentTarget.value)
    }

    const buyCurrency = () => {
        dispatch(withdrawalMoneyTC(amountTradedCurrency, currencyId))
        dispatch(addAdditionalCurrencyTC(amountTradedCurrency, currencyId))
        setAmountTradedCurrency(0)
    }

    const sellCurrency = () => {
        dispatch(enrolledMoneyTC(amountTradedCurrency, currencyId))
        dispatch(removeAdditionalCurrencyTC(amountTradedCurrency, currencyId))
        setAmountTradedCurrency(0)
    }

    const enterAmount = (e: ChangeEvent<HTMLInputElement>) => {
        setAmountTradedCurrency(+e.currentTarget.value)   // - need??????????????

        //
        dispatch(holderTradeAmountTC(+e.currentTarget.value, currencyId))
        //

    }

    const currencyListName = currencyList.list.map(elem =>
        <option key={elem.Cur_Abbreviation}
                value={elem.Cur_ID}
        >
            {elem.Cur_Name}
        </option>
    )


    return (
        <div className={style.selectCurency}>

                <div>
                    Select currency<br/>
                    <select
                        style={{width: 150}}
                        onChange={selectDropChart}>
                        <option> - no selected - </option>
                        {currencyListName}
                    </select>
                </div>

                <div>
                    Enter amount<br/>
                    <input type="number"
                           value={amountTradedCurrency}
                           style={{width: 50}}
                           onChange={(e) => enterAmount(e)}
                    />
                </div>

                <div>
                    press for<br/>
                    <button onClick={buyCurrency} disabled={buttonBuyDisabled}>Buy</button>
                    <button onClick={sellCurrency} disabled={buttonSellDisabled}>Sell</button>
                </div>

        </div>
    )
}

export default SelectCurrency
