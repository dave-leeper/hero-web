
import React from 'react';
import {useLocation} from 'react-awesome-router';
import './splash.scss';

let timeoutId = -1

const baseURL = 'https://gentle-dusk-67062.herokuapp.com/'
let pingServer = async (archetypeId, setArchetypeName) => {
    let url = baseURL + 'ping/server'
    let response = await fetch(url)
}
pingServer()

function Splash(props){
  if (-1 === timeoutId) {
    const {setLocation, setContext} = useLocation();
    timeoutId = setTimeout(()=>{ 
      setLocation('/Home'); 
    }, 3000);
    loadWasm(setContext);
  }

  return (
    <div className="splash-page">
      <div className="splash-title">HERO/Web</div>
    </div>
  );
}

let loadWasm = async (setContext) => {
  try {
    console.log("Loading WASM");
    const wasm = await import('hero_core-wasm');
    setContext({wasm});

    if (wasm.core_command_web) console.log(wasm.core_command_web("Command"));
  } catch(err) {
    console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
  }
};

export default Splash;
