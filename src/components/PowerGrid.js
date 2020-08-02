import React from "react";
import { IncludeState } from "../enums/IncludeState";
import PowerBar from "../components/PowerBar/PowerBar";
import { PowerSetType } from "../enums/PowerSetType";
import { SlotState } from "../enums/SlotState";
import { useMediaQuery } from 'react-responsive'
import './PowerGrid.scss';

const getColumnCount = (columnWidth) => {
    let count = 0;
    while (4 > count) {
        let canDisplayRow = useMediaQuery(
            { query: '(min-device-width: ' + (columnWidth * (count + 1)) + 'px)'}
        )
        if (!canDisplayRow)
            break;
        count++
    }
    return count;
}

const buildPowerBar = (powerEntry, level, key) => {
    if (powerEntry) {
        return(
            <PowerBar 
                powerName={powerEntry.power_id}
                powerLevel={powerEntry.level}
                powerSetType={PowerSetType.INHERENT}
                slotState1={SlotState.NO_POWER} 
                slotState2={SlotState.NO_POWER} 
                slotState3={SlotState.NO_POWER} 
                slotState4={SlotState.NO_POWER} 
                slotState5={SlotState.NO_POWER} 
                slotState6={SlotState.NO_POWER} 
                enhancement1="None"
                enhancement2="None"
                enhancement3="None"
                enhancement4="None"
                enhancement5="None"
                enhancement6="None"
                includeState={IncludeState.NONE}
                key={key} 
            />
        );
    } else {
        return(
            <PowerBar 
                powerName="None"
                powerLevel={level}
                powerSetType={PowerSetType.NO_POWER}
                slotState1={SlotState.NO_POWER} 
                slotState2={SlotState.NO_POWER} 
                slotState3={SlotState.NO_POWER} 
                slotState4={SlotState.NO_POWER} 
                slotState5={SlotState.NO_POWER} 
                slotState6={SlotState.NO_POWER} 
                enhancement1="None"
                enhancement2="None"
                enhancement3="None"
                enhancement4="None"
                enhancement5="None"
                enhancement6="None"
                includeState={IncludeState.NONE}
                key={key} 
            />
        );
    }
}

const buildToon = (toon) => {
    const levelObjs = []
    const build = toon.builds[toon.current_build]
    var key = 0

    levelObjs.push(buildPowerBar(build.power_entries.level_1_primary, 1, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_1_secondary, 1, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_2, 2, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_4, 4, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_6, 6, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_8, 8, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_10, 10, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_12, 12, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_14, 14, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_16, 16, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_18, 18, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_20, 20, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_22, 22, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_24, 24,key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_26, 26, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_28, 28, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_30, 30, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_32, 32, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_35, 35, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_38, 38, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_41, 41, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_44, 44, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_47, 47, key++))
    levelObjs.push(buildPowerBar(build.power_entries.level_49, 49, key++))
    levelObjs.push(buildPowerBar(build.power_entries.health, 1, key++))
    levelObjs.push(buildPowerBar(build.power_entries.stamina, 1, key++))
    if (toon.level > 1) levelObjs.push(buildPowerBar(build.power_entries.swift, 2, key++))
    if (toon.level > 1)levelObjs.push(buildPowerBar(build.power_entries.hurdle, 2, key++))
    if (toon.level > 1)levelObjs.push(buildPowerBar(build.power_entries.sprint, 2, key++))
    levelObjs.push(buildPowerBar(build.power_entries.brawl, 1, key++))
    levelObjs.push(buildPowerBar(build.power_entries.prestige_power_slide, 1, key++))
    if (toon.archetype_id === "Class_Peacebringer" || toon.archetype_id === "Class_Warshade" ) {
        levelObjs.push(buildPowerBar(build.power_entries.level_1_kheldian, 1, key++))
        if (toon.level >= 10) 
            levelObjs.push(buildPowerBar(build.power_entries.level_10_kheldian, 10, key++))
    }
    return levelObjs
}

const getColumn = (columnIndex, columnCount, powerBars, powersPerColumn, powerBarWidth) => {
    let sortedPowerBars = []
    for (var rowIndex = 0; rowIndex < powersPerColumn; rowIndex++) {
        var index = rowIndex + (columnIndex * powersPerColumn)
        if (index >= powerBars.length)
            break;
        var powerBar = powerBars[index]
        sortedPowerBars.push(powerBar)
    }
    return (
        <div>
            {sortedPowerBars}
        </div>
    )
}

let PowerGrid = (props) => {
    const POWER_BAR_WIDTH = 280
    const columnCount = getColumnCount(POWER_BAR_WIDTH);
    const powerBars = buildToon(props.toon);
    const powersPerColumn = Math.ceil(powerBars.length / columnCount)

    return (
        <div className="PowerGrid">
            <div className="PowerGridColumn">
                {getColumn(0, columnCount, powerBars, powersPerColumn, POWER_BAR_WIDTH)}
            </div>
            <div className="PowerGridColumn">
                {getColumn(1, columnCount, powerBars, powersPerColumn, POWER_BAR_WIDTH)}
            </div>
            <div className="PowerGridColumn">
                {getColumn(2, columnCount, powerBars, powersPerColumn, POWER_BAR_WIDTH)}
            </div>
            <div className="PowerGridColumn">
                {getColumn(3, columnCount, powerBars, powersPerColumn, POWER_BAR_WIDTH)}
            </div>
        </div>
    )
}

export default PowerGrid;