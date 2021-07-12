import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Navigation.module.css";
import AnimationHeader from "../common/animation/AnimationHeader";
import Logo from "../common/animation/img/logo.svg";


function Navigation() {

  return (
    <div className={style.navigation_container}>
 
    <AnimationHeader/>
    
    <div className={style.navigation_menu} >    

       {/*-----------------logo------------------------------------------*/}

        <div className={style.logo_container}>
 
            <svg width="70" height="50" viewBox="0 0 33 19">
                <path fill="#2962FF"
                      d="M29.032 7.382a5.47 5.47 0 0 1 .963 2.872A4.502 4.502 0 0 1 28.5 19H6a5.98 5.98 0 0 1-4.222-1.737l9.546-7.556c.35.187.75.293 1.176.293a2.49 2.49 0 0 0 1.066-.238l4.55 3.981a2.5 2.5 0 1 0 4.711-.157l6.205-6.204zm-1.414-1.414l-6.204 6.204A2.494 2.494 0 0 0 20.5 12a2.49 2.49 0 0 0-1.066.238l-4.55-3.981a2.5 2.5 0 1 0-4.801-.118L.608 15.638A6 6 0 0 1 6.061 7a8.001 8.001 0 0 1 15.625-1.227A5.474 5.474 0 0 1 24.5 5c1.157 0 2.231.358 3.118.968z">
                </path>
            </svg>

            <svg height="30pt" viewBox="-31 0 479 480" width="20pt">
                <path d="m120.5 160h64v208h-64zm0 0" fill="#ee638c"/>
                <path d="m232.5 128h64v208h-64zm0 0" fill="#8cb28c"/>
                <path d="m344.5 224h64v208h-64zm0 0" fill="#ee638c"/>
                <path d="m8.5 56h64v208h-64zm0 0" fill="#8cb28c"/>
                <path
                    d="m152.5 104c-4.417969 0-8 3.582031-8 8v40h-24c-4.417969 0-8 3.582031-8 8v208c0 4.417969 3.582031 8 8 8h24v32c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-32h24c4.417969 0 8-3.582031 8-8v-208c0-4.417969-3.582031-8-8-8h-24v-40c0-4.417969-3.582031-8-8-8zm24 64v192h-48v-192zm0 0"/>
                <path
                    d="m264.5 72c-4.417969 0-8 3.582031-8 8v40h-24c-4.417969 0-8 3.582031-8 8v208c0 4.417969 3.582031 8 8 8h24v32c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-32h24c4.417969 0 8-3.582031 8-8v-208c0-4.417969-3.582031-8-8-8h-24v-40c0-4.417969-3.582031-8-8-8zm24 64v192h-48v-192zm0 0"/>
                <path
                    d="m376.5 168c-4.417969 0-8 3.582031-8 8v40h-24c-4.417969 0-8 3.582031-8 8v208c0 4.417969 3.582031 8 8 8h24v32c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-32h24c4.417969 0 8-3.582031 8-8v-208c0-4.417969-3.582031-8-8-8h-24v-40c0-4.417969-3.582031-8-8-8zm24 64v192h-48v-192zm0 0"/>
                <path
                    d="m40.5 0c-4.417969 0-8 3.582031-8 8v40h-24c-4.417969 0-8 3.582031-8 8v208c0 4.417969 3.582031 8 8 8h24v32c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-32h24c4.417969 0 8-3.582031 8-8v-208c0-4.417969-3.582031-8-8-8h-24v-40c0-4.417969-3.582031-8-8-8zm24 64v192h-48v-192zm0 0"/>
            </svg>

        </div>

        <div className={style.navigationLink_holder}>
           <div >
             <NavLink className={style.link} to="exchange">Exchange</NavLink> &nbsp;
           </div>

           <div >
              <NavLink className={style.link} to="charts">Charts</NavLink> &nbsp;
           </div>

           <div >
              <NavLink className={style.link} to="Currency">Currency</NavLink> <br/>
           </div>
        </div>

           <div>

        </div>

    </div>
    </div>
  );
}

export default Navigation;
