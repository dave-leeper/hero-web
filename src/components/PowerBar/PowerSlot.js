import React, { useState } from "react";
import { PowerSetType } from "../../enums/PowerSetType";
import { SlotState } from "../../enums/SlotState";
import SvgUnslotted from "./SvgUnslotted";
import SvgSlotted from "./SvgSlotted";
import './PowerSlot.scss';

function Slot(props) {
    if (props.powerSetType === PowerSetType.NO_POWER
    || props.slotState === SlotState.NO_POWER
    || props.slotState === SlotState.UNSLOTTED){
      return <SvgUnslotted className={getStyle(props)}/>;
    }
    return <SvgSlotted className={getStyle(props)}/>;
}

function getStyle(props) {
    if (props.slotState === SlotState.UNSLOTTED)
        return 'SlotUnslotted transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... '
    else if (props.slotState === SlotState.NO_POWER)
        return 'SlotUnslotted'
    else if (props.powerSetType === PowerSetType.NO_POWER)
        return 'SlotUnslotted'
    else if (props.powerSetType === PowerSetType.PRIMARY)
        return 'SlotPrimary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... '
    else if (props.powerSetType === PowerSetType.SECONDARY)
        return 'SlotSecondary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... '
    else if (props.powerSetType === PowerSetType.POOL)
        return 'SlotPool transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... '
    else if (props.powerSetType === PowerSetType.EPIC)
        return 'SlotEpic transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... '
    else
        return 'SlotInherent transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... '
}

// Props
//  - slotState: See SlotState enum for values.
//  - powerSetType: See PowerSetType enum for values.
function PowerSlot(props){
    const [slotState, setSlotState] = useState(props.slotState);
    const [powerSetType] = useState(props.powerSetType);
    const clickHandler = (event) => {  
        console.log('click' + slotState)
        if (slotState === SlotState.NO_POWER) {
            event.preventDefault(); 
            props.onSlotChanged(this, slotState)
            return
        } else if (slotState === SlotState.UNSLOTTED) {
            setSlotState(SlotState.SLOTTED)
            props.onSlotChanged(this, slotState)
        }
    }
    const rightClickHandler = (event) => {  
        if (slotState === SlotState.SLOTTED) {
            setSlotState(SlotState.UNSLOTTED)
            props.onSlotChanged(this, slotState)
        }
        event.preventDefault(); 
    }
    
    return (
        <div onClick={clickHandler} onContextMenu={rightClickHandler} className="PowerSlot">
            <Slot slotState={slotState} powerSetType={powerSetType}/>
        </div>
    )
}

export default PowerSlot;