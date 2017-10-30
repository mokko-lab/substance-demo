import React, {Component} from 'react';
import styled from 'styled-components';

import MdCode from 'react-icons/lib/md/code';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/styles';

import { Row, Column, Padded, Panel, Split, SplitColumn } from 'substance-ui/lib/components/Layouts';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';
import { Card } from 'substance-ui/lib/components/Card';

import Pallet from '../components/Pallet';
import { CodeBlock, IconButton, Close} from '../components/CodeBlock';


const SidebarDemo = styled.div`
  background: #efefef;
  position: relative;
  height: 300px;
  border-radius: 3px;
  text-align: center;
  line-height: 300px;
  overflow: hidden;
  span {
    display: block;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    line-height: 300px;
    background: #d2d2d2;
    text-align: center;
    width:20%;
  }
`

const HeaderDemo = styled.div`
  background: #efefef;
  position: relative;
  height: 300px;
  border-radius: 3px;
  text-align: center;
  line-height: 300px;
  overflow: hidden;
  span {
    display: block;
    width:100%;
    position: absolute;
    line-height: 50px;
    left:0;
    top:0;
    background: #d2d2d2;
    height:50px;
  }
`

const LabelBox = styled.div`
  background: #efefef;
  position: relative;
  height: 70px;
  border-radius: 3px;
  text-align: center;
  line-height: 70px;
  overflow: hidden;
`




class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Padded top={10} bottom={4}>
          <Heading type="h2" weight={800} margin={0}>Layout</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
        </Padded>

        <Row columnsCount={2} gutter={40}>
          <Column matchHeight>
            <Card>
              <Padded all={2}>
                <Heading type="h5">Layout with Sidebar Card</Heading>
              </Padded>
              <Padded left={2} right={2} bottom={2}>
                <SidebarDemo>
                  <span>Sidebar</span>
                  <div>Content</div>
                </SidebarDemo>
              </Padded>
            </Card>
          </Column>

          <Column matchHeight>
            <Card>
              <Padded all={2}>
                <Heading type="h5">Layout with Header</Heading>
              </Padded>
              <Padded left={2} right={2} bottom={2}>
                <HeaderDemo>
                  <span>Header</span>
                  <div>Content</div>
                </HeaderDemo>
              </Padded>
            </Card>
          </Column>
        </Row>

        <Padded top={4} bottom={4}>
          <Heading type="h3" weight={800} margin={0}>Grid</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Paragraph>
        </Padded>

        <Card>
          <Padded all={2}>
            <Heading type="h5">Layout with Row - Columns</Heading>
          </Padded>
          <Padded all={2}>
            <Row gutter={20}>
              <Column>
                <LabelBox>Column 1</LabelBox>
              </Column>
            </Row>
            <Row columnsCount={2} gutter={20}>
              <Column>
                <LabelBox>Columns:1/2</LabelBox>
              </Column>
              <Column>
                <LabelBox>Columns:1/2</LabelBox>
              </Column>
            </Row>
            <Row columnsCount={3} gutter={20}>
              <Column>
                <LabelBox>Columns:1/3</LabelBox>
              </Column>
              <Column>
                <LabelBox>Columns:1/3</LabelBox>
              </Column>
              <Column>
                <LabelBox>Columns:1/3</LabelBox>
              </Column>
            </Row>
            <Row columnsCount={4} gutter={20}>
              <Column>
                <LabelBox>Columns:1/4</LabelBox>
              </Column>
              <Column>
                <LabelBox>Columns:1/4</LabelBox>
              </Column>
              <Column>
                <LabelBox>Columns:1/4</LabelBox>
              </Column>
              <Column>
                <LabelBox>Columns:1/4</LabelBox>
              </Column>
              <Column>
                <LabelBox>Columns:1/4</LabelBox>
              </Column>
              <Column>
                <LabelBox>Columns:1/4</LabelBox>
              </Column>
              <Column>
                <LabelBox>Columns:1/4</LabelBox>
              </Column>
              <Column>
                <LabelBox>Columns:1/4</LabelBox>
              </Column>
            </Row>
          </Padded>
        </Card>

      </div>
    );
  }
}

export default Layout;
