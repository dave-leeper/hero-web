
import React from 'react';
import {useLocation} from 'react-awesome-router';
import './splash.scss';

let timeoutId = -1
let primaryAPIServerUp = false
let secondaryAPIServerUp = -1
const baseURLPrimaryAPIServer = 'https://gentle-dusk-67062.herokuapp.com/'
const baseURLSecondaryAPIServer = 'https://gentle-dusk-67062.herokuapp.com/'

function Splash(props){
  let pingServer = async (baseURL) => {
    let response = await fetch(baseURL + 'ping/server')
    if (response.ok) return true
    return false
  }
  let pingServers = async () => {
    primaryAPIServerUp = await pingServer(baseURLPrimaryAPIServer)
    secondaryAPIServerUp = await pingServer(baseURLSecondaryAPIServer)
  }
  pingServers()

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
  } catch(err) {
    console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
  }
};

export default Splash;
