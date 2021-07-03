
import style from "./Exchange.module.css";
import React from "react";

import ExchangeHeader from "./ExchangeHeader/ExchangeHeader";
import ExchangeBody from "./ExchangeBody/ExchangeBody";
import Prompt from "./ExchangeHeader/Prompt/Prompt";


const Exchange = (props: any) => {

    return (
     <div className={style.exchange_wrapper} >

         <Prompt/>

         <ExchangeHeader/>

         <ExchangeBody/>

     </div>
    )
}

export default Exchange
