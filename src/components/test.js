// @flow
import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

const StickyStyled = styled.div`
  .section {
    height: 100vh;
  }
  
  .sticky {
    background-color: red;
    width: 100%;

    & div {
      padding: 30px;
    }
  }
  
  .blue {
    background-color: blue;
  }
`;

const Sticky = () => (
  

  <StickyStyled>
    <div className="section" />
    <Controller>
      <Scene duration={2000} pin={true} enabled={true}>
        <div className="sticky"><div>Pin Test 1</div></div>
      </Scene>
      <Scene duration={2000} pin={{ pushFollowers: false }}>
        <div className="sticky"><div>Pin Test 2</div></div>
      </Scene>
      <Scene duration={300} pin={true} offset={100}>
        <div className="sticky blue"><div>Pin Test 3</div></div>
      </Scene>
    </Controller>
    <div className="section" />
  </StickyStyled>
);

export default Sticky;