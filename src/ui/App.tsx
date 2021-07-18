import React, {useEffect} from 'react';
import Navigation from './navigation/Navigation';
import {HashRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import './App.css';
import {makeCurrencyListTomorrowDateTC, makeCurrencyListTodayTC} from "../bll/currencyListReducer";
import {useDispatch} from "react-redux";



function App() {

    const dispatch = useDispatch()

    const today = new Date();
    const todayDate = today.toISOString().substr(0,10);
    const todaySec = today.getTime();
    const tomorrowSec = todaySec + 86400000;
    const tomorrow = new Date(tomorrowSec)
    const tomorrowDate = tomorrow.toISOString().substr(0,10);


    useEffect(() => {
        dispatch(makeCurrencyListTodayTC(todayDate))
        dispatch(makeCurrencyListTomorrowDateTC(tomorrowDate))
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

