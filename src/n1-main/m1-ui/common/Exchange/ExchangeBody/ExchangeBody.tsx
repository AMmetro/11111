import style from "./ExchangeBody.module.css";
import React, {ChangeEvent, ChangeEventHandler, EventHandler, useEffect, useState} from "react";
import {makeCurrencyListTC, currencyListStateType} from "../../../../m2-bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../m2-bll/store";
import CurrencyCard from "./CurencyCard/CurrencyCard";
import weitingCoin from "../../animation/img/coin3.svg"



const ExchangeBody = (props: any) => {

    const currencyList=useSelector<AppStoreType,currencyListStateType>(state=>state.currencyListReducer)

    return (
    <div className={style.exchange_body_container} >


     { !currencyList.list.length &&

           <div>
                <h1>... Loading data</h1>
                <object className={style.weitingCoin} type="image/svg+xml" data={weitingCoin}>
                   Your browser does not support SVG
               </object>

           </div>

    }



         <div className={style.exchange_card_container}>

              { currencyList.list.map(elem =>
                  <CurrencyCard
                      id={elem.Cur_Abbreviation}
                      Cur_Abbreviation={elem.Cur_Abbreviation}
                      Cur_Name={elem.Cur_Name}
                      Cur_OfficialRate={elem.Cur_OfficialRate}
                    />
                  )}

         </div>

     </div>
    )
}

export default ExchangeBody
