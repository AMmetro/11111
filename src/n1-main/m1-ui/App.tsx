import React, {useEffect} from 'react';
import Navigation from './navigation/Navigation';
import {HashRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import './App.css';
import {makeCurrencyListYesterdayTC, makeCurrencyListTodayTC} from "../m2-bll/currencyListReducer";
import {useDispatch} from "react-redux";



function App() {

    const dispatch = useDispatch()

    const today = new Date();
    const todayDate = today.toISOString().substr(0,10);
    const todaySec = today.getTime();
    const yesterdaySec = todaySec - 86400000*3;
    const yesterday = new Date(yesterdaySec)
    const yesterdayDate = yesterday.toISOString().substr(0,10);


    useEffect(() => {
        dispatch(makeCurrencyListTodayTC(todayDate))
        dispatch(makeCurrencyListYesterdayTC(yesterdayDate))
     }, []);



  return (
    <div className="App">
        <HashRouter>
              <Navigation/>
              <Routes/>
        </HashRouter>
    </div>
  );
}

export default App;


{/* https://learn.javascript.ru/css-transitions */}
{/* https://developer.mozilla.org/ru/docs/Web/CSS/animation */}
{/* https://webref.ru/course/css-advanced/animation */}
