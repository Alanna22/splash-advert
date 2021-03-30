import React from 'react'
import Rellax from "rellax";
import { Controller, Scene } from 'react-scrollmagic';
import './PanelOne.css'
import BGLeft from '../img/bgLeft.png'
import BGTopRight from '../img/bgTopRight.png'
import BGBottomRight from '../img/bgBottomRight.png'
import PanelOneText from '../img/panelOneText.png'
import SinbadJog from '../img/SinbadJog.png'
import PanelTwoBG from '../img/PanelTwoBG.png'
import Cyclops from '../img/Cyclops.png'
import SinbadSurprised from '../img/SinbadSurprised.png'

const rellax = new Rellax('.rellax');

function Panel() {
    return (

       
                <>
                    <div class="PanelOne">
                        
                        <div class="PanelOneLeft rellax" data-rellax-speed="-6">
                            <img src={BGLeft} class="PanelOneLeftBG" ></img>
                        </div>
                        <div class="PanelOneRight rellax" data-rellax-speed="-7">
                            <img src={BGTopRight}></img>
                            <img src={BGBottomRight}></img>
                        </div>
                        
                    </div>

                    <img src={PanelOneText} class="PanelOneText rellax" data-rellax-speed="1" data-rellax-zindex="5"></img>
                    <img src={SinbadJog} class="SinbadJog rellax" data-rellax-zindex="5"></img>

                   <div class="space">

                   </div>


                    <div class="section">
                        <Controller>
                        <Scene duration={1000} pin={true} enabled={true} offset={400}>
                                <img src={PanelTwoBG} class="panelTwoBG"></img>
                        </Scene>
                        </Controller>
                    </ div>

                    <div class=" PanelTwoElements rellax" data-rellax-speed="1">
                        <img src={Cyclops} class="cyclops" ></img>
                        <img src={SinbadSurprised} class="SinbadSurprised"></img>

                    </div>


               
                </>
            
    )
}

export default Panel
