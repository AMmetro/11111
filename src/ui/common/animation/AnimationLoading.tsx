import React from "react";
import style from "./AnimationLoading.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {currencyListStateType} from "../../../bll/currencyListReducer";
import weitingCoin from "../animation/img/coin3.svg"


function AnimationLoading() {

    const currencyList=useSelector<AppStoreType,currencyListStateType>(state=>state.currencyListReducer)


    return (
        <div className={style.animation_container}>

            { !currencyList[0].list.length &&

            <div>
                <h1>... Loading data</h1>
                <object className={style.weitingCoin} type="image/svg+xml" data={weitingCoin}>
                    Your browser does not support SVG
                </object>
            </div>

            }

        </div>
    );
}

export default AnimationLoading;
