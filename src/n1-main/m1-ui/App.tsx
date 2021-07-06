import React from 'react';
import Navigation from './navigation/Navigation';
import {HashRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import './App.css';

function App() {

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
