import React from 'react';
import { Routes, useLocation } from 'react-awesome-router';
import './App.scss';

function App(props){
    const {location, context, setLocation} = useLocation();
    if (!context.wasm && location !== '/Splash') 
      setLocation('/Splash'); 
    return (
      <div className="App">
        <header className="App-header">
          <Routes />   
        </header>
      </div>
    );
}

export default App;