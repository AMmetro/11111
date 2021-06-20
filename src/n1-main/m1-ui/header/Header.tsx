import React from 'react';
import {NavLink} from "react-router-dom";


function Header() {

  return (
    <div className="App">

        <NavLink to="login">Login</NavLink> &nbsp;
        <NavLink to="registration">Registration</NavLink> &nbsp;
        <NavLink to="charts">Charts</NavLink> &nbsp;
        <NavLink to="Currency">Currency</NavLink> <br/>

        <div><br/></div>

    </div>
  );
}

export default Header;
