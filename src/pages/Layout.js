import React, {Component} from 'react';
import styled from 'styled-components';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/styles';

import { Row, Column, Panel, Padded} from 'substance-ui/lib/components/Layouts';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';
import { Card } from 'substance-ui/lib/components/Card';

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
    width:160px;
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
        <Panel paddingTop={100} paddingBottom={40}>
          <Heading type="h2" weight={800} margin={0}>Layout</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Layouts in Substance-UI makes the site user-friendly, functional and make it look attractive for customers to stay on the site.</Paragraph>
        </Panel>

        <Row gutter={40}>
          <Column>
            <Row columnsCount={2} gutter={40}>
              <Column matchHeight>
                <Card>
                  <Panel padding={30}>
                    <Panel paddingBottom={30}>
                      <Heading type="h5">Layout with Sidebar Card</Heading>
                    </Panel>
                    <SidebarDemo>
                      <span>Sidebar</span>
                      <div>Content</div>
                    </SidebarDemo>
                  </Panel>
                </Card>
              </Column>

              <Column matchHeight>
                <Card>
                  <Panel padding={30}>
                    <Panel paddingBottom={30}>
                      <Heading type="h5">Layout with Header</Heading>
                    </Panel>
                    <HeaderDemo>
                      <span>Header</span>
                      <div>Content</div>
                    </HeaderDemo>
                  </Panel>
                </Card>
              </Column>
            </Row>
          </Column>
          <Column>
            <Heading type="h4" weight={800} margin={0}>Usage</Heading>
            <span style={{'display': 'inline-block', 'overflow':'hidden', 'borderRadius':'4px'}}>
              <SyntaxHighlighter useInlineStyles={true} language='html' style={ocean}>
                {` <LayoutWrapper> YOUR APP CODE </LayoutWrapper> `}
              </SyntaxHighlighter>
            </span>
          </Column>
          <Column>
            <Panel paddingBottom={20}>
              <Heading type="h3" weight={800} margin={0}>Grid</Heading>
              <Paragraph size="medium" weight={300}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Paragraph>
            </Panel>
            <Card>
              <Panel padding={30}>
                <Panel paddingBottom={30}>
                  <Heading type="h5" margin={0}>Layout with Row - Columns</Heading>
                </Panel>
                <Panel paddingBottom={20}>
                  <Row gutter={20}>
                    <Column>
                      <LabelBox>Column 1</LabelBox>
                    </Column>
                  </Row>
                </Panel>
                <Panel paddingBottom={20}>
                  <Row columnsCount={2} gutter={20}>
                    <Column>
                      <LabelBox>Columns:1/2</LabelBox>
                    </Column>
                    <Column>
                      <LabelBox>Columns:1/2</LabelBox>
                    </Column>
                  </Row>
                </Panel>
                <Panel paddingBottom={20}>
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
                </Panel>
                <Panel paddingBottom={20}>
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
                </Panel>
                <Panel paddingBottom={20}>
                  <Row columnsCount={5} gutter={20}>
                    <Column>
                      <LabelBox>Columns:1/5</LabelBox>
                    </Column>
                    <Column>
                      <LabelBox>Columns:1/5</LabelBox>
                    </Column>
                    <Column>
                      <LabelBox>Columns:1/5</LabelBox>
                    </Column>
                    <Column>
                      <LabelBox>Columns:1/5</LabelBox>
                    </Column>
                    <Column>
                      <LabelBox>Columns:1/5</LabelBox>
                    </Column>
                  </Row>
                </Panel>
              </Panel>
            </Card>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Layout;
