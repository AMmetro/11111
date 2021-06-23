
import style from "./CurrencyCard.module.css";
import React, {ChangeEvent, ChangeEventHandler, EventHandler, useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";


const CurrencyCard = (props: any) => {



    return (
 
         <div className={style.card_items}
              id={props.Cur_Abbreviation}>
              <span>{props.Cur_Abbreviation}</span>
              <br/>
              <span>{props.Cur_Name}</span>
              <br/>
              <span>{props.Cur_OfficialRate}</span>
         </div>

    )
}

export default CurrencyCard
