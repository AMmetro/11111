import style from "./SelectCurency.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import {makeCurrencyListTC, currencyListStateType} from "../../../../../m2-bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../../m2-bll/store";
import {withdrawalMoneyTC, enrolledMoneyTC} from "../../../../../m2-bll/walletReducer";
import {holderTradeAmountTC} from "../../../../../m2-bll/holderTradeValueReducer";
import {addAdditionalCurrencyTC} from "../../../../../m2-bll/currenciesWalletReducer";
import {removeAdditionalCurrencyTC} from "../../../../../m2-bll/currenciesWalletReducer";
import {
    controlTradeBuyUiTC,
    controlTradeSellUiTC,
    controlTradeBuyAnimationUiTC,
    controlTradeUserinterfaceReducerStateType, controlTradeSellAnimationUiTC
} from "../../../../../m2-bll/controlTradeUserInterfaceReducer";


const SelectCurrency = (props: any) => {
    const [amountTradedCurrency, setAmountTradedCurrency] = useState<any>();
    const [selectedCurrency, setSelectedCurrency] = useState<boolean>(false);
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

        if (!selectedCurrency){
            dispatch(controlTradeBuyUiTC("prohibited"))
            dispatch(controlTradeSellUiTC("prohibited"))
        }

    }, [date]);

    // -----check if some currency selected from list------------------------
    const selectDropCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.currentTarget.value.length < 4){  // lenth of not selected > 4
            setSelectedCurrency(true)
            setCurrencyId(e.currentTarget.value)
        }
        else {
            dispatch(controlTradeBuyUiTC("prohibited"))
            dispatch(controlTradeSellUiTC("prohibited"))
            setSelectedCurrency(false)
          }
     }


    const buyCurrency = () => {
        dispatch(withdrawalMoneyTC(amountTradedCurrency, currencyId))
        dispatch(addAdditionalCurrencyTC(amountTradedCurrency, currencyId))
        setAmountTradedCurrency(0)
        turnOnControlBuyAnimationCurrency()
    }

    const sellCurrency = () => {
        dispatch(enrolledMoneyTC(amountTradedCurrency, currencyId))
        dispatch(removeAdditionalCurrencyTC(amountTradedCurrency, currencyId))
        setAmountTradedCurrency(0)
        turnOnControlSellAnimationCurrency()
    }


   // ----------------------ANIMATION----------------------------------------------------


    const turnOnControlBuyAnimationCurrency=()=>{
        dispatch(controlTradeBuyAnimationUiTC("true"))
        setTimeout(() => dispatch(controlTradeBuyAnimationUiTC("false")), 3100)
    }

    const turnOnControlSellAnimationCurrency=()=>{
        dispatch(controlTradeSellAnimationUiTC("true"))
        setTimeout(() => dispatch(controlTradeSellAnimationUiTC("false")), 3100)
    }


    // ------------------------------------------------------------------------





    const enterAmount = (e: ChangeEvent<HTMLInputElement>) => {

        setAmountTradedCurrency(+e.currentTarget.value)
        dispatch(holderTradeAmountTC(+e.currentTarget.value, currencyId))
    }


    const currencyListName = currencyList.list.map(elem =>
        <option key={elem.Cur_Abbreviation}
                value={elem.Cur_ID}
        >
            {elem.Cur_Name}
        </option>
    )


    return (
        <div className={style.selectCurency_container}>

            <div>
                    <span className={`${selectedCurrency
                        ? style.hint_valid
                        : style.hint_error} `}>
                         Select currency
                    </span>
                <br/>
                <select
                    style={{width: 150}}
                    onChange={selectDropCurrency}>
                    <option> - no selected -</option>
                    {currencyListName}
                </select>
            </div>

            <div>
                Enter amount<br/>
                <input type="number"
                       value={amountTradedCurrency}
                       style={{width: 50}}
                       onChange={(e) => enterAmount(e)}
                       disabled={!selectedCurrency}
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
