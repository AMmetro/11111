import React, {ChangeEvent, useState} from "react";
import style from "./Charts.module.css";
import {currencyListStateType} from "../../../bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import DrawCharts from "./DrawChart/DrawChart";
import {makeChartsTC,currencyChartStateType} from "../../../bll/currencyChartReducer";
import AnimationLoading from "../animation/AnimationLoading";


function Charts() {

    const [dateFrom, setDateFrom] = useState<string>("");
    const [dateUntil, setDateUntil] = useState<string>("");
    const [currencyId, setCurrencyId] = useState<string>("");

    const currencyChart=useSelector<AppStoreType,currencyChartStateType>(state=>state.currencyChartReducer)
    const currencyList=useSelector<AppStoreType,currencyListStateType>(state=>state.currencyListReducer)
    const dispatch = useDispatch()

     const today = new Date();
     const date = today.toISOString().substr(0,10);

    const currencyListName = currencyList[0].list.map(elem =>
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
                <div className={style.input_label}>
                        <span>select a period for charts</span>
                </div>
                <div>
                    <input id="dateFrom" value={dateFrom}
                           className={style.inputDate}
                           type="date" name="dateFrom"
                           defaultValue={date}
                           onChange={changeDateFromHandler}/>
                    <input id="dateUntil" value={dateUntil}
                           className={style.inputDate}
                           type="date" name="dateUntil"
                           defaultValue={date}
                           onChange={changeDateUntilHandler}/>
                    <button className={"superButton"} onClick={makeCharts}>draw</button>
                 </div>
                <select className={style.select_currency}
                    onChange={selectDropChart}>
                    <option>Select currency for chart</option>
                    {currencyListName}
                </select>
            </div>

            <AnimationLoading/>

            { currencyChart.value.length
                ? <div>
                        <DrawCharts
                            currencyChart={currencyChart}
                            currencyList={currencyList}
                            currencyId={currencyId}
                        />
                </div>
                :<div>
                    <h3> no data for chart </h3>
                </div>  }


        </div>
    );
}

export default Charts;
