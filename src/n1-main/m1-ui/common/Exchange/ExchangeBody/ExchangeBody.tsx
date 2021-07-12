import style from "./ExchangeBody.module.css";
import React, {ChangeEvent, ChangeEventHandler, EventHandler, useEffect, useState} from "react";
import {makeCurrencyListTodayTC, currencyListStateType} from "../../../../m2-bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../m2-bll/store";
import CurrencyCard from "./CurencyCard/CurrencyCard";
import AnimationLoading from "../../animation/AnimationLoading";



const ExchangeBody = (props: any) => {

    const currencyList=useSelector<AppStoreType,currencyListStateType>(state=>state.currencyListReducer)

    const trend = currencyList[0].list.map((elem,i)=>{
        return (
        elem.Cur_OfficialRate - currencyList[1].list[i].Cur_OfficialRate
            ) })

    const flag=["https://restcountries.eu/data/aus.svg",
                "https://restcountries.eu/data/bgr.svg",
                "https://restcountries.eu/data/ukr.svg",
                "https://restcountries.eu/data/dnk.svg",
                "https://restcountries.eu/data/usa.svg",
                "https://restcountries.eu/data/fsm.svg",
                "https://restcountries.eu/data/pol.svg",
                "https://restcountries.eu/data/jpn.svg",
                "https://restcountries.eu/data/irn.svg",
                "https://restcountries.eu/data/imn.svg",
                "https://restcountries.eu/data/can.svg",
                "https://restcountries.eu/data/chn.svg",
                "https://restcountries.eu/data/kwt.svg",
                "https://restcountries.eu/data/mda.svg",
                "https://restcountries.eu/data/nzl.svg",
                "https://restcountries.eu/data/nor.svg",
                "https://restcountries.eu/data/rus.svg",
                                 "https://restcountries.eu/data/ata.svg",
                "https://restcountries.eu/data/sgp.svg",
                "https://restcountries.eu/data/tjk.svg",
                "https://restcountries.eu/data/kaz.svg",
                "https://restcountries.eu/data/tur.svg",
                "https://restcountries.eu/data/gbr.svg",
                "https://restcountries.eu/data/cze.svg",
                "https://restcountries.eu/data/swe.svg",
                "https://restcountries.eu/data/swz.svg"
               ]



    return (
    <div className={style.exchange_body_container} >


        <AnimationLoading/>

         <div className={style.exchange_card_container}>

              { currencyList[0].list.map((elem,i) =>{
                  // excluding one exact item from the list
                  if (elem.Cur_Abbreviation!= "XDR"){
                          return(
                              <CurrencyCard
                                  id={elem.Cur_Abbreviation}
                                  Cur_Abbreviation={elem.Cur_Abbreviation}
                                  Cur_Name={elem.Cur_Name}
                                  Cur_OfficialRate={elem.Cur_OfficialRate}
                                  flag={flag[i]}
                                  trend={trend[i]}

                              />
                              )
                      }}
                  )}

         </div>

     </div>
    )
}

export default ExchangeBody
