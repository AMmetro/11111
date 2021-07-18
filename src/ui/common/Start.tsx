import React from 'react';
import './App.css';
import start from "../../ui/common/animation/img/coinsLogo.png"
import AnimatedTxt from '../../ui/common/animation/AnimatedTxt'

function Start() {

  return (

    <div className="start">

      <AnimatedTxt/>

      <img src={start} alt="logo" className={"start_image"}/>

    </div>
  );
}

export default Start;
