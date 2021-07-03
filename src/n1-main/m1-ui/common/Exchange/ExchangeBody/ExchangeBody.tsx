import style from "./ExchangeBody.module.css";
import React, {ChangeEvent, ChangeEventHandler, EventHandler, useEffect, useState} from "react";
import SuperButtonContainer from "../../SuperComponents/SuperButton/SuperButtonContainer";
import {makeCurrencyListTC, currencyListStateType} from "../../../../m2-bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../m2-bll/store";
import {walletReducerStateType} from "../../../../m2-bll/walletReducer";
import CurrencyCard from "./CurencyCard/CurrencyCard";


const ExchangeBody = (props: any) => {

    const currencyList=useSelector<AppStoreType,currencyListStateType>(state=>state.currencyListReducer)
    const dispatch = useDispatch()

    return (
    <div className={style.exchange_body_container} >

        { currencyList.list.map(elem =>
             <CurrencyCard
                id={elem.Cur_Abbreviation}
                Cur_Abbreviation={elem.Cur_Abbreviation}
                Cur_Name={elem.Cur_Name}
                Cur_OfficialRate={elem.Cur_OfficialRate}
              />
            )}





     </div>
    )
}

export default ExchangeBody
