import style from "./CurrencyCard.module.css";
import React from "react";
import AnimationUpArrow from "../../../animation/AnimationUpArrow";
import AnimationDownArrow from "../../../animation/AnimationDownArrow";

export type PropsType = {
id: string
Cur_Abbreviation: string
Cur_Name:string
Cur_OfficialRate: number
flag:string
trend:number
}

const CurrencyCard = (props: PropsType) => {

    return (
        <div className={style.card_items}>
            <span>{props.Cur_Name}</span>
            <br/>
            <span className={style.card_rate_items}>BYN/{props.Cur_Abbreviation}</span>
            <span className={style.card_rate_items}>={props.Cur_OfficialRate}</span>
            <br/>
            <div className={style.flag_trend_container}>
                <img src={props.flag} style={{width: 33}}/>
                <span className={style.trend_arrow}>
                  {props.trend<0 ? <AnimationUpArrow/> : <AnimationDownArrow/>}
                   &nbsp;
                  { Math.abs(+props.trend.toFixed(1))}%
                </span>

            </div>
        </div>

    )
}

export default CurrencyCard
