import React from 'react';
import { PowerSetType } from "../../enums/PowerSetType";
import SvgInfoDisabled from "../SvgInfoDisabled";
import SvgInfoEnabled from "../SvgInfoEnabled";
import './PowerButtons.scss';

// Props
// - powerSetType: powerSetType enum
function PowerButtons(props){
    const clickHandlerInfo = (event) => {  
        alert('Info clicked')
    }

    const getInfo = (powerSetType) => {
        if (powerSetType === PowerSetType.NO_POWER) {
            return (
                <SvgInfoDisabled className="SmallButton" onClick={clickHandlerInfo}/>
            )
        } else {
            return (
                <SvgInfoEnabled className="SmallButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... " onClick={clickHandlerInfo}/>
            )
        }
    }

    return (
        <div className="PowerButtons">
            {getInfo(props.powerSetType)}
        </div>
    )
}

export default PowerButtons;