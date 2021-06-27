import style from "./SelectCurency.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import {makeCurrencyListTC, currencyListStateType} from "../../../../../m2-bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../../m2-bll/store";
import {buyCurrencyTC, sellCurrencyTC} from "../../../../../m2-bll/walletReducer";
import {buyAdditionalCurrencyTC} from "../../../../../m2-bll/currenciesWalletReducer";


const SelectCurrency = (props: any) => {
    const [amount, setAmount] = useState<number>(1000);
    const currencyList = useSelector<AppStoreType, currencyListStateType>(state => state.currencyListReducer)
    const [currencyId, setCurrencyId] = useState<string>("");
    const dispatch = useDispatch()

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
        dispatch(buyCurrencyTC(amount, currencyId))
        dispatch(buyAdditionalCurrencyTC(amount, currencyId))
    }

    const sellCurrency = () => {
        dispatch(sellCurrencyTC(amount, currencyId))
    }

    const enterAmount = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(+e.currentTarget.value)
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
                        <option>валюта не выбрана</option>
                        {currencyListName}
                    </select>
                </div>

                <div>
                    Enter amount<br/>
                    <input type="number"
                           style={{width: 50}}
                           onChange={(e) => enterAmount(e)}
                    />
                </div>

                <div>
                    press for<br/>
                    <button onClick={buyCurrency}>Buy</button>
                    <button onClick={sellCurrency}>Sell</button>
                </div>

        </div>
    )
}

export default SelectCurrency
