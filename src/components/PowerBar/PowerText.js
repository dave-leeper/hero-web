import React, { useState } from 'react';
import './PowerText.scss';


const baseURL = 'https://gentle-dusk-67062.herokuapp.com/'
let getPower = async (powerId, setPowerName) => {
    if ('None' === powerId || !powerId)
        return
    let url = baseURL + 'power/' + powerId
    console.log(url)
    let response = await fetch(url)
    if (response.ok) {
        let json = await response.json();
        setPowerName(json.display_name)
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

// Props
//  - powerName: Power name
//  - powerLevel: Power level
//  - onPowerTextChanged: Called when power text changes
function PowerText(props){
    let getPowerName = () => {
        if ('None' === props.powerName || !props.powerName)
            return 'Tap To Set Power'
        else
            return props.powerName
    }

    let getTextColor = () => {
        if ('None' === props.powerName || !props.powerName)
            return 'TextColorDisabled'
        else
            return 'TextColor'
    }

    const clickHandler = (event) => {  
        props.onPowerTextChanged("SampleText")
    }

    const [powerName, setPowerName] = useState(getPowerName());
    getPower(props.powerName, setPowerName  )

    return (
        <div className="PowerText" onClick={clickHandler}>
            <div className={"PowerTextName " + getTextColor()}>{powerName}</div>
            <div className={"PowerTextLevel " + getTextColor()}>Level {props.powerLevel}</div>
        </div>
    )
}

export default PowerText;