
import style from "./CurrencyCard.module.css";
import React from "react";
import img from "../../../animation/img/process.png"


const CurrencyCard = (props: any) => {

    return (

         <div className={style.card_items}
              id={props.Cur_Abbreviation}>
              <span>{props.Cur_Name}</span>
              <br/>
              <span className={style.card_rate_items}>BYN/{props.Cur_Abbreviation}</span>
              <span className={style.card_rate_items}>={props.Cur_OfficialRate}</span>
              <br/>
              <img src={props.flag} style={{width: 33}} />
              {props.trend ? "<-" : "->"}
         </div>

    )
}

export default CurrencyCard
