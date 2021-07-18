import style from "./ExchangeBody.module.css";
import React from "react";
import {currencyListStateType} from "../../../../bll/currencyListReducer";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../bll/store";
import CurrencyCard from "./CurencyCard/CurrencyCard";
import AnimationLoading from "../../animation/AnimationLoading";
import flagData from "../../../../dal/FlagData";

const ExchangeBody = () => {

    const currencyList = useSelector<AppStoreType, currencyListStateType>(state => state.currencyListReducer)

    let trend: number[];

    if (currencyList[1].list.length !== 0) {
        trend = currencyList[0].list.map((elem, i) => {
            return (
                (elem.Cur_OfficialRate - currencyList[1].list[i].Cur_OfficialRate) / elem.Cur_OfficialRate * 100
            )
        })
    }


    return (
        <div className={style.exchange_body_container}>

            <AnimationLoading/>

            {currencyList[1].list.length !== 0 &&
            <div className={style.exchange_card_container}>
                {
                    currencyList[0].list.map((elem, i) => {
                        // excluding one exact item from the list
                        if (elem.Cur_Abbreviation !== "XDR") {
                            return (
                                <CurrencyCard
                                    key={i}
                                    id={elem.Cur_Abbreviation}
                                    Cur_Abbreviation={elem.Cur_Abbreviation}
                                    Cur_Name={elem.Cur_Name}
                                    Cur_OfficialRate={elem.Cur_OfficialRate}
                                    flag={flagData[i]}
                                    trend={trend[i]}
                                />
                            )
                        }
                    })
                }
            </div>}

        </div>

    )
}

export default ExchangeBody
