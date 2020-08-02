import React, { useState } from "react";
import PowerSlot from "./PowerSlot";
import { SlotState } from "../../enums/SlotState";
import './PowerSlotRow.scss';

let buildRow = (powerName, powerSetType, buttonState) => {
    const items = []
    if (!powerName || "None" === powerName) {
        for (var index = 0; index < buttonState.length; index++) {
            items.push(
                <PowerSlot 
                    slotState={buttonState[index]} 
                    powerSetType={powerSetType} 
                    onSlotChanged={onSlotChanged}
                    key={index} 
                />
            )
        }
    } else {
        items.push(
            <PowerSlot 
                slotState={SlotState.SLOTTED} 
                powerSetType={powerSetType} 
                onSlotChanged={onSlotChanged}
                key={0} 
            />
        )
        items.push(
            <PowerSlot 
                slotState={SlotState.UNSLOTTED} 
                powerSetType={powerSetType} 
                onSlotChanged={onSlotChanged}
                key={1} 
            />
        )
    }
    return items
}

let onSlotChanged = (slot, newSlotState) => {
    alert('Slot clicked ' + JSON.stringify(slot) + " " + newSlotState)
}

// Props
// powerName = Power name
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
function PowerSlotRow(props){
    let buttonStateArray = []
    buttonStateArray.push(props.slotState1)
    buttonStateArray.push(props.slotState2)
    buttonStateArray.push(props.slotState3)
    buttonStateArray.push(props.slotState4)
    buttonStateArray.push(props.slotState5)
    buttonStateArray.push(props.slotState6)
    const [buttonState] = useState(buttonStateArray);
    return (
        <div className="PowerSlotRow">
            {buildRow(props.powerName, props.powerSetType, buttonState)}
        </div>
    )
}

export default PowerSlotRow;