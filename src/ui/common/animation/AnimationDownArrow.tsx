import React from "react";
import style from "./AnimationDownArrow.module.css";
import upArrow from "../animation/img/arrowDown.svg"


function AnimationDownArrow() {

    return (
            <div>
                <object className={style.downArrow} type="image/svg+xml" data={upArrow}>
                    Your browser does not support SVG
                </object>
            </div>

    );
}

export default AnimationDownArrow;
