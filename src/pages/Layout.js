import React, {Component} from 'react';
import styled from 'styled-components';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/styles';

import { Row, Column, Panel } from 'substance-ui/lib/components/Layouts';
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
        </Row>
      </div>
    );
  }
}

export default Layout;
