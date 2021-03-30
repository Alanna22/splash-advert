
import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

const SectionWipesStyled = styled.div`
  overflow: hidden;

  .panel {
    height: 100vh;
    width: 100%;
    text-align: center;
  }
  
  .panel.blue {
    background-color: #fff;
  }

`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
        <div className="panel blue"><span></span></div>
      </Scene>
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;