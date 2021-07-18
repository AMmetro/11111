import React from "react";
import style from "./AnimationBuy.module.css";
import animationCoin from "./img/gold.svg"


function AnimationBuy() {

      return (
        <div className={style.animation_container}>

            <object className={style.animation_coin} type="image/svg+xml" data={animationCoin}>
                Your browser does not support SVG
            </object>

        </div>
    );
}

export default AnimationBuy;
