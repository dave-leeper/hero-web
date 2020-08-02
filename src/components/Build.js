import React from "react";
import Svg1Selected from "./Svg1Selected";
import Svg2 from "./Svg2";
import Svg3 from "./Svg3";
import './Build.scss';

// Props
//  - onClick: Click function
//  - imgSource: Image url
//  - label: Button text
let Build = (props) => {
    const clickHandler1 = () => {
        alert("1")
    }
    const clickHandler2 = () => {
        alert("2")
    }
    const clickHandler3 = () => {
        alert("3")
    }

    return (
        <div className="Build">
            <div className="BuildButtons">
                <Svg1Selected className="SmallButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... " onClick={clickHandler1}/>
                <Svg2 className="SmallButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... " onClick={clickHandler2}/>
                <Svg3 className="SmallButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... " onClick={clickHandler3}/>
            </div>
            <div className="TextColor BuildText">Build</div>
       </div>
    )
}

export default Build;