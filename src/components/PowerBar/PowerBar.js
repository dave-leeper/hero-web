import React from 'react';
import PowerSlotRow from "./PowerSlotRow";
import PowerButtons from "./PowerButtons";
import { PowerSetType } from "../../enums/PowerSetType";
import PowerText from "./PowerText";
import './PowerBar.scss';

let onPowerTextChanged = (newPower) => {
    alert('Power text clicked ' + newPower)
}

let onIncludeChanged = (newState) => {
    alert('Include clicked ' + newState)
}

let getBorderClass = (props) => {
    if (props.powerSetType === PowerSetType.NO_POWER)
        return 'PowerBarMainNoPower'
    else if (props.powerSetType === PowerSetType.PRIMARY)
        return 'PowerBarMainPrimary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... '
    else if (props.powerSetType === PowerSetType.SECONDARY)
        return 'PowerBarMainSecondary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... '
    else if (props.powerSetType === PowerSetType.POOL)
        return 'PowerBarMainPool transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... '
    else if (props.powerSetType === PowerSetType.EPIC)
        return 'PowerBarMainEpic transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... '
    else if (props.powerSetType === PowerSetType.INHERENT)
        return 'PowerBarMainInherent transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... '
}

let getPowerBarHoverClass = (props) => {
    if (props.powerSetType === PowerSetType.NO_POWER)
        return 'PowerBarMainNoPower transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... '
    else 
        return ''
}

// Props
// powerName = Power name
// powerLevel = Power level
// powerSetType = powerSetType enum
// slotState1 = slotState enum for slot 1 
// slotState2 = slotState enum for slot 2 
// slotState3 = slotState enum for slot 3 
// slotState4 = slotState enum for slot 4  
// slotState5 = slotState enum for slot 5
// slotState6 = slotState enum for slot 6 
// enhancement1 = Enhancement for slot 1
// enhancement2 = Enhancement for slot 2
// enhancement3 = Enhancement for slot 3
// enhancement4 = Enhancement for slot 4
// enhancement5 = Enhancement for slot 5
// enhancement6 = Enhancement for slot 6
// includeState - Include state
function PowerBar(props){
    return (
        <div className={"PowerBar " + getPowerBarHoverClass(props)}>
            <div className={"PowerBarMain " + getBorderClass(props)}>
                <PowerText 
                    powerName={props.powerName}
                    powerLevel={props.powerLevel} 
                    onPowerTextChanged={onPowerTextChanged}>
                </PowerText>
                <PowerButtons 
                    powerSetType={props.powerSetType}
                />
            </div>
            <PowerSlotRow 
                powerName={props.powerName}
                powerSetType={props.powerSetType}
                slotState1={props.slotState1}
                slotState2={props.slotState2}
                slotState3={props.slotState3}
                slotState4={props.slotState4}
                slotState5={props.slotState5}
                slotState6={props.slotState6}
                enhancement1={props.enhancement1}
                enhancement2={props.enhancement2}
                enhancement3={props.enhancement3}
                enhancement4={props.enhancement4}
                enhancement5={props.enhancement5}
                enhancement6={props.enhancement6}
            />
        </div>
    )
}

export default PowerBar;