import React from "react";
import './ImageButton.scss';

// Props
//  - onClick: Click function
//  - imgSource: Image url
//  - label: Button text
let ImageButton = (props) => {
    const clickHandler = () => {
        props.onClick(props.label)
    }

    return (
        <div className="ImageButton" onClick={clickHandler}>
            <img className="ImageButton-Image"src={props.imgSource} alt={props.label}></img>
            <div className="ImageButton-Label">{props.label}</div>
        </div>
    )
}

export default ImageButton;