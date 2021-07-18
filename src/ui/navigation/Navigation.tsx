import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Navigation.module.css";
import AnimationHeader from "../common/animation/AnimationHeader";


function Navigation() {

    return (
        <div className={style.navigation_container}>

             <AnimationHeader/>

            <div className={style.navigation_menu}>

                <div className={style.navigationLink_holder}>
                    <div>
                        <NavLink className={style.link} to="exchange"
                        activeClassName={style.menu_highlighting}
                        >Exchange</NavLink> &nbsp;
                    </div>

                    <div>
                        <NavLink className={style.link} to="charts"
                        activeClassName={style.menu_highlighting}
                        >Charts</NavLink> &nbsp;
                    </div>

                    <div>
                        <NavLink className={style.link} to="Currency"
                        activeClassName={style.menu_highlighting}
                        >Currency</NavLink> <br/>
                    </div>
                </div>

                <div>

                </div>

            </div>
        </div>
    );
}

export default Navigation;
