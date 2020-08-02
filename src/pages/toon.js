import React from "react";
import BasicInfo from "../components/BasicInfo";
import Build from "../components/Build";
import PowerGrid from "../components/PowerGrid";
import TabBar from "../components/TabBar";
import { useLocation } from 'react-awesome-router';
import './toon.scss';

function Toon(props){
    let {context, params, setContext, setLocation} = useLocation();
    let new_toon = context.toon
    if (!new_toon) {
        if (!context.wasm){
            setLocation('/Splash'); 
            window.location.reload();
            return;
        }
        new_toon = JSON.parse(context.wasm.core_command_web("new_toon!@#" + params.archetype))
        setContext({wasm: context.wasm, toon: new_toon})
    }

    return (
        <div className="Toon">
            <div className="ToonGeneral">
                <BasicInfo toon={new_toon}/>
                <Build toon={new_toon}/>
            </div>
            <TabBar/>
            <PowerGrid toon={new_toon}/>
        </div>
    );
}

export default Toon;