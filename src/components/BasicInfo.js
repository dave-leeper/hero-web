import React, { useState } from 'react';
import './BasicInfo.scss';

const baseURL = 'https://gentle-dusk-67062.herokuapp.com/'
let getArchetype = async (archetypeId, setArchetypeName) => {
    let url = baseURL + 'archetype/' + archetypeId
    let response = await fetch(url)
    if (response.ok) {
        let json = await response.json();
        setArchetypeName(json.display_name)
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

// Props
//  - onNameSetClick: Name click function
//  - onPowerSetClick: Powerset click function
//  - toon: Toon
let Build = (props) => {
    const nameClickHandler = () => {
        alert("Name")
    }
    const powerSetClickHandler = () => {
        alert("Power Set")
    }
    const getName = () => {
        if (props.toon.name)
            return props.toon.name
        else 
            return "Name"
    }
    const getPrimary = () => {
        if (props.toon.builds[props.toon.current_build].primary)
            return props.toon.builds[props.toon.current_build].primary
        else 
            return "Tap To Set Primary, Secondary"
    }
    const getSecondary = () => {
        if (props.toon.builds[props.toon.current_build].secondary)
            return props.toon.builds[props.toon.current_build].secondary
        else 
            return ""
    }

    const [archetypeName, setArchetypeName] = useState(props.toon.archetype_id);
    getArchetype(props.toon.archetype_id, setArchetypeName)

    return (
        <div className="BasicInfo">
            <div className="BasicInfoName" onClick={nameClickHandler}>
                {getName()}
            </div>
            <div className="BasicInfoArchetype">
                {archetypeName}
            </div>
            <div className="BasicInfoPrimaryAndSecondaryPowerSets transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... " onClick={powerSetClickHandler}>
                {getPrimary()} {getSecondary()}
            </div>
        </div>
    )
}

export default Build;