
import style from "./Exchange.module.css";
import React from "react";

import ExchangeHeader from "./ExchangeHeader/ExchangeHeader";
import ExchangeBody from "./ExchangeBody/ExchangeBody";
import Prompt from "./ExchangeHeader/Prompt/Prompt";
import Animation from "../../common/animation/Animation";


const Exchange = (props: any) => {

    return (
     <div className={style.exchange_wrapper} >

         <Prompt/>

         <Animation/>

         <ExchangeHeader/>

         <ExchangeBody/>

     </div>
    )
}

export default Exchange
