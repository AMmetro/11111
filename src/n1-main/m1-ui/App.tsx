import React, {useEffect} from 'react';
import Navigation from './navigation/Navigation';
import {HashRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import './App.css';
import {makeCurrencyListTC} from "../m2-bll/currencyListReducer";
import {useDispatch} from "react-redux";



function App() {

    const dispatch = useDispatch()


    const today = new Date();
    const date = today.toISOString().substr(0,10);

    useEffect(() => {
        dispatch(makeCurrencyListTC(date))
    },[date]);



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
