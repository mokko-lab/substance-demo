import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  background: ${props => props.color};
  text-align: center;
  text-transform: uppercase;
  line-height: ${props => props.size || 80}px;
  color: white;
  border-radius: 4px;
`

export default class HomeHero extends React.Component {
  render(){
    return (
      <HeroWrapper>
        <img src={require('./../images/logo.svg')} width="340" alt="" />
      </HeroWrapper>
    )
  };
}
