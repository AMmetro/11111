import React from "react";
import style from "./AnimationUpArrow.module.css";
import upArrow from "../animation/img/arrowUp.svg"


function AnimationUpArrow() {


    return (

            <div>
               <object className={style.upArrow} type="image/svg+xml" data={upArrow}>
                    Your browser does not support SVG
                </object>
            </div>

    );
}

export default AnimationUpArrow;
