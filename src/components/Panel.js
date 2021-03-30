import React from 'react'
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
import SinbadJusJax from '../img/SinbadJusJax.png'
import SinbadReady from '../img/SinbadReady.png'
import SinbadJU from '../img/SinbadJU.png'
import SinbadJD from '../img/SinbadJD.png'
import SinbadThwack from '../img/SinbadThwack.png'
import PanelSixBG from '../img/PanelSixBG.png'
import PanelSixText from '../img/PanelSixText.png'
import SinbadProud from '../img/SinbadProud.png'

function Panel() {
    return (

       
                <>
                    <div class="section">
                        <Controller>
                        <Scene duration={1000} pin={true} enabled={true} offset={400}>
                            <div class="PanelOne"> 
                            <div class="PanelOneLeft">
                                <img src={BGLeft} class="PanelOneLeftBG" ></img>
                            </div>
                            <div class="PanelOneRight">
                                <img src={BGTopRight}></img>
                                <img src={BGBottomRight}></img>
                            </div>
                            </div>
                        </Scene>
                        </Controller>
                    </ div>

                    <img src={PanelOneText} class="PanelOneText"></img>
                    <img src={SinbadJog} class="SinbadJog"></img>
                   
                   
                   





                   
                   <div class="space">

                   </div>


                    <div class="space">

                   </div>


                    <Controller>
                        <Scene pin enabled={true} indicators={false} pushFollowers={true} triggerHook={0} offset={-200} >
                                <img src={PanelTwoBG} class="panelTwoBG"/>
                        </Scene>
                        <Scene pin enabled={true} indicators={false} pushFollowers={true} triggerHook={0} offset={-300}>
                                <img src={Cyclops} class="cyclops"/>
                        </Scene>
                    </Controller>

                    <Controller>
                        <Scene duration={300} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                        <div className="sticky char"><div ><img src={SinbadSurprised} class="SinbadSurprised" /></div></div>
                        </Scene>
                    </Controller>

                    <Controller>
                        <Scene duration={600} enabled={true} indicators={false}  pin={{ pushFollowers: false }} triggerHook={1}>
                        <div className="sticky char"><div ><img src={SinbadJusJax} class="SinbadJusJax" /></div></div>
                        </Scene>
                    </Controller>

                    <div class="space">

                    </div>



                    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                        <Scene pin>
                            <div className="panel white"><span></span></div>
                        </Scene>
                    </Controller>

                    <Controller>
                        <Scene pin enabled={true} indicators={false} pushFollowers={true} triggerHook={0} offset={-200} >
                            <div class="PanelFour"> 
                                <div class="PanelOneLeft">
                                    <img src={BGLeft} class="PanelOneLeftBG" ></img>
                                </div>
                                <div class="PanelOneRight">
                                    <img src={BGTopRight}></img>
                                    <img src={BGBottomRight}></img>
                                </div>
                                </div>
                        </Scene>
                        <Scene pin enabled={true} indicators={false} pushFollowers={true} triggerHook={0} offset={-700}>
                                <img src={Cyclops} class="cyclopsTwo"/>
                        </Scene>
                    </Controller>
                    

                    <Controller>
                        <Scene duration={100} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                            
                        <div className="sticky char"><div ><img src={SinbadReady} class="SinbadReady" /></div></div>
                        </Scene>
                    </Controller>

                    <Controller>
                        <Scene duration={100} enabled={true} indicators={false}  pin={{ pushFollowers: false }} triggerHook={1}>
                        <div className="sticky char"><div ><img src={SinbadJU} class="SinbadJU" /></div></div>
                        </Scene>
                    </Controller>

                    <Controller>
                        <Scene duration={100} enabled={true} indicators={false}  pin={{ pushFollowers: false }} triggerHook={1}>
                        <div className="sticky char"><div ><img src={SinbadJD} class="SinbadJD" /></div></div>
                        </Scene>
                    </Controller>

                    <div class="space">

                   </div>



                    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                        <Scene pin>
                            <div className="panel whiteTwo"><span></span></div>
                        </Scene>
                    </Controller>

                    <Controller>
                        <Scene pin enabled={true} indicators={false} pushFollowers={true} triggerHook={0} offset={0} >
                                    <img src={BGLeft} class="PanelFiveLeftBG" ></img>
                        </Scene>
                        <Scene pin enabled={true} indicators={false} pushFollowers={true} triggerHook={0} offset={-700}>
                                <img src={Cyclops} class="CyclopsThree"/>
                        </Scene>
                    </Controller>
                    <Controller>
                        <Scene duration={100} enabled={true} indicators={false}  pin={{ pushFollowers: false }} triggerHook={1}>
                        <div className="sticky char"><div ><img src={SinbadThwack} class="SinbadThwack" /></div></div>
                        </Scene>
                    </Controller>

                    <div class="space">

                   </div>



                    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                        <Scene pin>
                            <div className="panel white"><span></span></div>
                        </Scene>
                    </Controller>

                    <Controller>
                        <Scene pin enabled={true} indicators={false} pushFollowers={true} triggerHook={0} offset={0} >
                                    <img src={PanelSixBG} class="PanelSixBG" ></img>
                        </Scene>
                        <Scene pin enabled={true} indicators={false} pushFollowers={true} triggerHook={0} offset={0}>
                                <img src={PanelSixText} class="PanelSixText"/>
                        </Scene>
                    </Controller>

                    <Controller>
                        <Scene pin enabled={false} indicators={false} pushFollowers={true} triggerHook={0}  >
                            <div className="sticky char"><div ><img src={SinbadProud} class="SinbadProud" /></div></div>   
                        </Scene>
                       
                    </Controller>


                  

               
                </>
            
    )
}

export default Panel
