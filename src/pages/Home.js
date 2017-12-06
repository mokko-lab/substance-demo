import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {ocean} from 'react-syntax-highlighter/dist/styles';
import styled from 'styled-components';

import {
  LayoutWrapper,
  Menu,
  MenuItem,
  Panel,
  Card,
  Heading,
  Paragraph,
  Container,
  Button
} from 'substance-ui';

const HeroWrapper = styled.div `
  background-color: white;
  padding: 200px 0px;
  text-align: center;
  color: white;
  border-radius: 4px;
`

const Header = () => {
  return (
    <Container style={{
      'height': '100%'
    }}>
      <Panel flex justifyContent="space-between" alignItems="center" alignment="center">
        <NavLink to='/'>
          <img src={require('./../images/icon.svg')} width="60" alt=""/>
        </NavLink>
        <Menu itemSpacing={30} activeFontSize={18} activeWeight={800}>
          <MenuItem>
            <NavLink to='/docs'>Docs</NavLink>
          </MenuItem>
        </Menu>
      </Panel>
    </Container>
  )
}

class Home extends Component {

  render() {
    return (
      <LayoutWrapper headerComponent={< Header />} headerHeight={80} shrinkHeight={70} headerBg="#FFFFFF" headerShadow={true} contentBg="#F9F9F9">

        <Container>

          <Panel paddingTop={50} paddingBottom={50}>
            <Card>
              <HeroWrapper>
                <Heading type="x-large">Substance UI</Heading>
                <Paragraph size="xx-large" weight={300}>A beautiful, reusable, React UI Components library.</Paragraph>
                <Panel paddingTop={50} paddingBottom={20} flex justifyContent="center" alignItems="center">
                  <span style={{
                    'display': 'inline-block'
                  }}>

                    <SyntaxHighlighter useInlineStyles={true} language='vim' style={ocean}>
                      {` npm install substance-ui `}
                    </SyntaxHighlighter>
                  </span>
                </Panel>
              </HeroWrapper>
            </Card>
          </Panel>

            <Heading type="h4">Install</Heading>

            <NavLink to='/docs'>
              <Button size="large" color="primary">Get Started</Button>
            </NavLink>


        </Container>

      </LayoutWrapper>
    );
  }
}

export default Home;
