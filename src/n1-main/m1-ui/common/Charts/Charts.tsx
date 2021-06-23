import React, {ChangeEvent, ChangeEventHandler, EventHandler, useEffect, useState} from "react";
import style from "./Charts.module.css";
import SuperButtonContainer from "../SuperComponents/SuperButton/SuperButtonContainer";
import {makeCurrencyListTC, currencyListStateType} from "../../../m2-bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/store";
import DrawCharts from "./DrawChart/DrawChart";
import {makeChartsTC,currencyChartStateType} from "../../../m2-bll/currencyChartReducer";


function Charts() {

    const [dateFrom, setDateFrom] = useState<string>("");
    const [dateUntil, setDateUntil] = useState<string>("");
    const [currencyId, setCurrencyId] = useState<string>("");

    const currencyChart=useSelector<AppStoreType,currencyChartStateType>(state=>state.currencyChartReducer)
    const currencyList=useSelector<AppStoreType,currencyListStateType>(state=>state.currencyListReducer)
    const dispatch = useDispatch()

    const today = new Date();
    today.setDate(today.getDate() );
    const date = today.toISOString().substr(0,10);

    //----------------------------------------------------------------------------------
    useEffect(() => {
        dispatch(makeCurrencyListTC(date))
    },[date]);
    //----------------------------------------------------------------------------------


    const currencyListName = currencyList.list.map(elem =>
                                    <option key={elem.Cur_Abbreviation}
                                            value={elem.Cur_ID}
                                      >
                                         {elem.Cur_Name}
                                    </option>
                                      )

    const selectDropChart = (e:ChangeEvent<HTMLSelectElement>) => {
        setCurrencyId(e.currentTarget.value)
       }

       const makeCharts=()=>{
        dispatch(makeChartsTC(currencyId, dateFrom, dateUntil))
    }

    const changeDateFromHandler = ()=>{
        //@ts-ignore
        let dateFromValue=document.getElementById("dateFrom").value
        setDateFrom(dateFromValue)
    }

    const changeDateUntilHandler = ()=>{
        //@ts-ignore
        let dateUntillValue=document.getElementById("dateUntil").value
        setDateUntil(dateUntillValue)
    }

    return (
        <div className={style.body_container}>

            <div className={style.input_container}>
                <div className={style.input_lable}>
                        <span>select a date period</span>
                </div>
                <div>
                    <input id="dateFrom" value={dateFrom}
                           type="date" name="dateFrom"
                           defaultValue={date}
                           onChange={changeDateFromHandler}/>
                    <input id="dateUntil" value={dateUntil}
                           type="date" name="dateUntil"
                           defaultValue={date}
                           onChange={changeDateUntilHandler}/>
                    <SuperButtonContainer
                        red // пропсу с булевым значением не обязательно указывать true
                        onClick={makeCharts}>
                        draw
                    </SuperButtonContainer>
                </div>

            </div>

              <select
                 onChange={selectDropChart}>
                 <option>Select currency for chart</option>
                 {currencyListName}
              </select>
            <br/>

             <DrawCharts
                 currencyChart={currencyChart}
                 currencyList={currencyList}
                 currencyId={currencyId}
             />

        </div>
    );
}

export default Charts;
