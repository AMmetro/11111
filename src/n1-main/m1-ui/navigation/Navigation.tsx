import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Navigation.module.css";


function Navigation() {

  return (
    <div className={style.navigation_container}>
       <div className={style.navigationLink_holder}>
         <NavLink to="exchange">exchange</NavLink> &nbsp;
       </div>
       <div className={style.navigationLink_holder}>
          <NavLink to="charts">Charts</NavLink> &nbsp;
        </div>
        <div className={style.navigationLink_holder}>
          <NavLink to="Currency">Currency</NavLink> <br/>
        </div>
        <div><br/></div>

    </div>
  );
}

export default Navigation;
