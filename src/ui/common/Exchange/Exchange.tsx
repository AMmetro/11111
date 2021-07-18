import style from "./Exchange.module.css";
import {useSelector} from "react-redux";
import ExchangeHeader from "./ExchangeHeader/ExchangeHeader";
import ExchangeBody from "./ExchangeBody/ExchangeBody";
import Prompt from "./ExchangeHeader/Prompt/Prompt";
import AnimationBuy from "../../common/animation/AnimationBuy";
import AnimationSell from "../animation/AnimationSell";
import {AppStoreType} from "../../../bll/store";
import {controlTradeUserinterfaceReducerStateType} from "../../../bll/controlTradeUserInterfaceReducer";



const Exchange = () => {

    const controlUserinterface = useSelector<AppStoreType, controlTradeUserinterfaceReducerStateType>(state => state.controlTradeUserInterfaceReducer)

    return (
        <div className={style.exchange_wrapper}>

            <Prompt/>

            <div className={style.animation_holder}>
                {controlUserinterface.controlTradeBuyAnimationUIStatus === "true"
                    ? <AnimationBuy/>
                    : null
                }
                {controlUserinterface.controlTradeSellAnimationUIStatus === "true"
                    ? <AnimationSell/>
                    : null
                }
            </div>


            <div className={style.animation_holder}>

            </div>

            <ExchangeHeader/>

            <ExchangeBody/>

        </div>
    )
}

export default Exchange
