import React from 'react';
import './App.css';
import start from "../../m1-ui/common/animation/img/coinsLogo.png"

function Start() {

  return (
    <div className="App">
    <h1> exchange cryptocurrencies </h1>
      <img src={start} alt="logo" width={500}/>

    </div>
  );
}

export default Start;
