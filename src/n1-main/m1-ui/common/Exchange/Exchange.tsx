
import style from "./Exchange.module.css";
import React from "react";

import ExchangeHeader from "./ExchangeHeader/ExchangeHeader";
import ExchangeBody from "./ExchangeBody/ExchangeBody";


const Exchange = (props: any) => {

    return (
     <div className={style.exchange_wrapper} >
        <ExchangeHeader/>
        <ExchangeBody/>
     </div>
    )
}

export default Exchange
