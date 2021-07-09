import React from "react";
import style from "./AnimationSell.module.css";
import animationCoin from "./img/gold.svg"


function AnimationSell() {


      return (
        <div className={style.animation_container}>

            <object className={style.animation_coin} type="image/svg+xml" data={animationCoin}>
                Your browser does not support SVG
            </object>

        </div>
    );
}

export default AnimationSell;
