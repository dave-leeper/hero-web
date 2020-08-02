import React from "react";
import {useLocation} from 'react-awesome-router';
import ImageButton from "../components/ImageButton";
import ArachnosSoldierImage from '../images/Arachnos Soldier.png'
import ArachnosWidowImage from '../images/Arachnos Widow.png'
import BlasterImage from '../images/Blaster.png'
import BruteImage from '../images/Brute.png'
import ControllerImage from '../images/Controller.png'
import CorruptorImage from '../images/Corruptor.png'
import DefenderImage from '../images/Defender.png'
import DominatorImage from '../images/Dominator.png'
import MastermindImage from '../images/Mastermind.png'
import PeacebringerImage from '../images/Peacebringer.png'
import ScrapperImage from '../images/Scrapper.png'
import SentinelImage from '../images/Sentinel.png'
import StalkerImage from '../images/Stalker.png'
import TankerImage from '../images/Tanker.png'
import WarshadeImage from '../images/Warshade.png'
import SpacerImage from '../images/Spacer.png'
import RebornImage from '../images/Reborn.png'
import DropboxImage from '../images/Dropbox.png'
import HeroBaseImage from '../images/HeroBase.png'
import './home.scss';

function Home(props){
    const {context, setLocation, setContext} = useLocation();
    const clickNonHandler = function(msg) {
        alert(msg)
    }
    const clickHandler = function(msg) {
        setContext({wasm: context.wasm, toon: undefined});
        setLocation('/Toon/' + msg + '/New'); 
    }
    const midsClick = function(event) {clickNonHandler('Mids')}
    const dropboxClick = function(event) {clickNonHandler('Dropbox')}
    const herobaseClick = function(event) {clickNonHandler('HeroBase')}
    const arachnosSoliderClick = function(event) {clickHandler('Class_Arachnos_Soldier')}
    const arachnosWidowClick = function(event) {clickHandler('Class_Arachnos_Widow')}
    const blasterClick = function(event) {clickHandler('Class_Blaster')}
    const bruteClick = function(event) {clickHandler('Class_Brute')}
    const controllerClick = function(event) {clickHandler('Class_Controller')}
    const corruptorClick = function(event) {clickHandler('Class_Corruptor')}
    const defenderClick = function(event) {clickHandler('Class_Defender')}
    const dominatorClick = function(event) {clickHandler('Class_Dominator')}
    const mastermindClick = function(event) {clickHandler('Class_Mastermind')}
    const peacebringerClick = function(event) {clickHandler('Class_Peacebringer')}
    const scrapperClick = function(event) {clickHandler('Class_Scrapper')}
    const sentinelClick = function(event) {clickHandler('Class_Sentinel')}
    const stalkerClick = function(event) {clickHandler('Class_Stalker')}
    const tankerClick = function(event) {clickHandler('Class_Tanker')}
    const warshadeClick = function(event) {clickHandler('Class_Warshade')}

    return (
        <div className="Home">
            <div className="ArchetypeButtonPanel">
                <div className="ArchetypeButtonColumn">
                    <div className="ArchetypeButtonPanelTitle">Open</div>
                    <div className="ArchetypeButtonRow">
                        <div className="ArchetypeButton">
                            <ImageButton imgSource={SpacerImage} label=""></ImageButton>
                        </div>
                        <div id="Mids Reborn" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={midsClick} imgSource={RebornImage} label="Mid's Reborn"></ImageButton>
                        </div>
                        <div id="Dropbox" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={dropboxClick} imgSource={DropboxImage} label="Dropbox"></ImageButton>
                        </div>
                        <div id="HeroBase" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={herobaseClick} imgSource={HeroBaseImage} label="HeroBase"></ImageButton>
                        </div>
                    </div>
                    <div style={{height: 20 + 'px'}}></div>
                    <div className="ArchetypeButtonPanelTitle">Create</div>
                    <div className="ArchetypeButtonRow">
                        <div id="Arachnos_Soldier" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={arachnosSoliderClick} imgSource={ArachnosSoldierImage} label="Arachnos Soldier"></ImageButton>
                        </div>
                        <div id="Arachnos_Widow" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={arachnosWidowClick} imgSource={ArachnosWidowImage} label="Arachnos Widow"></ImageButton>
                        </div>
                        <div id="Blaster" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={blasterClick} imgSource={BlasterImage} label="Blaster"></ImageButton>
                        </div>
                        <div id="Brute" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={bruteClick} imgSource={BruteImage} label="Brute"></ImageButton>
                        </div>
                        <div id="Controller" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={controllerClick} imgSource={ControllerImage} label="Controller"></ImageButton>
                        </div>
                    </div>
                    <div className="ArchetypeButtonRow">
                        <div id="Corruptor" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={corruptorClick} imgSource={CorruptorImage} label="Corruptor"></ImageButton>
                        </div>
                        <div id="Defender" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={defenderClick} imgSource={DefenderImage} label="Defender"></ImageButton>
                        </div>
                        <div id="Dominator" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={dominatorClick} imgSource={DominatorImage} label="Dominator"></ImageButton>
                        </div>
                        <div id="Mastermind" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={mastermindClick} imgSource={MastermindImage} label="Mastermind"></ImageButton>
                        </div>
                        <div id="Peacebringer" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={peacebringerClick} imgSource={PeacebringerImage} label="Peacebringer"></ImageButton>
                        </div>
                    </div>
                    <div className="ArchetypeButtonRow">
                        <div id="Scrapper" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={scrapperClick} imgSource={ScrapperImage} label="Scrapper"></ImageButton>
                        </div>
                        <div id="Sentinel" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={sentinelClick} imgSource={SentinelImage} label="Sentinel"></ImageButton>
                        </div>
                        <div id="Stalker" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={stalkerClick} imgSource={StalkerImage} label="Stalker"></ImageButton>
                        </div>
                        <div id="Tanker" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={tankerClick} imgSource={TankerImage} label="Tanker"></ImageButton>
                        </div>
                        <div id="Warshade" className="ArchetypeButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                            <ImageButton onClick={warshadeClick} imgSource={WarshadeImage} label="Warshade"></ImageButton>
                        </div>
                    </div>
                </div>
                <div className="ArchetypeLink transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 ... ">
                    Tell me about the Archetypes
                </div>
            </div>
        </div>
    );
}

export default Home;