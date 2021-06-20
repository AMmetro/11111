import React, {ChangeEvent, useState} from "react";
import style from "./Currency.module.css";
import SuperButtonContainer from "../SuperComponents/SuperButton/SuperButtonContainer";
import {makeCurrencyListTC, currencyListStateType} from "../../../m2-bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/store";

function Currency() {

    const [currencyListDate, setCurrencyListDate] = useState<string>("");

    const currencyList=useSelector<AppStoreType,any>(state=>state.currencyListReducer)
    const dispatch = useDispatch()

    const today = new Date();
    today.setDate(today.getDate() );
    const date = today.toISOString().substr(0,10);

      //@ts-ignore
      const currPair = currencyList.list.map(elem =>
          <div className={style.pairs_table} id={elem.Cur_Abbreviation}>
              <span>{elem.Cur_Abbreviation}</span>
              <span>{elem.Cur_Name}</span>
              <span>{elem.Cur_OfficialRate}</span>
          </div> )


    const changeCurrencyListDateHandler = ()=>{
        //@ts-ignore
        let inputDate=document.getElementById("currencyListDate").value
        setCurrencyListDate(inputDate)
    }

    const getCurrencyRate=()=>{
        dispatch(makeCurrencyListTC(currencyListDate))
    }
    console.log(date)
    return (
        <div className={style.body_container}>


            <div className={style.input_container}>
                <div className={style.input_lable}>
                    <span>select a date for get currency rate</span>
                </div>
                <div>
                    <input id="currencyListDate" value={currencyListDate}
                     type="date" name="currencyListDate"
                     defaultValue={date}
                     onChange={changeCurrencyListDateHandler}/>
                    <SuperButtonContainer
                        red // пропсу с булевым значением не обязательно указывать true
                        onClick={getCurrencyRate}>
                        get
                    </SuperButtonContainer>
                </div>


            </div>

            {/*<span> {currencyList.date ? currencyList.date : today.getDate() +"-"+ (today.getMonth()+1) +"-"+ today.getFullYear()} </span>*/}
            <span> {currencyList.date ? currencyList.date.toLocaleDateString() : date}  </span>

            {currPair}

        </div>
    );
}

export default Currency;
