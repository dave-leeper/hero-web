import React from "react";
import './TabBar.scss';

// Props
let Build = (props) => {
    const allClickHandler = () => {
        alert("All")
    }

    const primaryClickHandler = () => {
        alert("Primary")
    }

    const secondaryClickHandler = () => {
        alert("Secondary")
    }

    const poolClickHandler = () => {
        alert("Pool")
    }

    const epicClickHandler = () => {
        alert("Epic")
    }

    const inherentClickHandler = () => {
        alert("Inherent")
    }

    return (
        <div className="TabBar">
            <div className="TabBarTab TabBarSelected transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... " onClick={allClickHandler}>All</div>
            <div className="TabBarTab TabBarNormal transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... " onClick={primaryClickHandler}>Primary</div>
            <div className="TabBarTab TabBarNormal transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... " onClick={secondaryClickHandler}>Secondary</div>
            <div className="TabBarTab TabBarNormal transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... " onClick={poolClickHandler}>Pool</div>
            <div className="TabBarTab TabBarNormal transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... " onClick={epicClickHandler}>Epic</div>
            <div className="TabBarTab TabBarNormal transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... " onClick={inherentClickHandler}>Inherent</div>
        </div>
    )
}

export default Build;