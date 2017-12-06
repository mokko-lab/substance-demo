import React, {Component} from 'react';
import styled from 'styled-components';

import { Row, Column, Panel, Heading, Paragraph, Card, Table } from 'substance-ui';

import { propertiesHeader, propertiesRow } from './../components/PropertiesTable';
import Highlighter from './../components/Highlighter';


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
      properties: [{
        name: 'contentBackground',
        type: 'string',
        options: null,
        default: '#fff',
        description: 'Background color of a container used by LayoutWrapper.'
      },
      {
        name: 'headerComponent',
        type: 'node',
        options: null,
        default: null,
        description: 'You can assign your header component to this property.'
      },
      {
        name: 'headerHeight',
        type: 'number',
        options: null,
        default: '90',
        description: 'Height of a header component.'
      },
      {
        name: 'headerBackground',
        type: 'string',
        options: null,
        default: '#fff',
        description: 'Background color of header.'
      },
      {
        name: 'headerShadow',
        type: 'boolean',
        options: 'true | false',
        default: 'true',
        description: 'Enable or Disable header shadow.'
      },
      {
        name: 'sidebarComponent',
        type: 'node',
        options: null,
        default: null,
        description: 'You can assign your sidebar component to this property.'
      },
      {
        name: 'sidebarWidth',
        type: 'number',
        options: null,
        default: '270',
        description: 'Width of sidebar component.'
      },
      {
        name: 'sidebarBackground',
        type: 'string',
        options: null,
        default: '#fff',
        description: 'Background color of sidebar.'
      },
      {
        name: 'sidebarShadow',
        type: 'boolean',
        options: 'true | false',
        default: 'true',
        description: 'Enable or Disable sidebar shadow.'
      }]
    }
  }

  render() {
    return (
      <div>
        <Panel paddingTop={80} paddingBottom={50}>
          <Heading type="h2" weight={800} margin={0}>Layout</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Layouts in Substance-UI makes the site user-friendly, functional and make it look attractive for customers to stay on the site.</Paragraph>
        </Panel>

        <Row gutter={50} columnsCount={1}>
          <Column>
            <Row columnsCount={2} gutter={40}>
              <Column matchHeight>
                <Card>
                  <Panel padding={20}>
                    <Panel paddingBottom={20}>
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
                  <Panel padding={20}>
                    <Panel paddingBottom={20}>
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
            <Panel paddingBottom={10}>
              <Heading type="h4" weight={300}>Usage</Heading>
            </Panel>
            <Highlighter>
                {` <LayoutWrapper> YOUR APP CODE / ROUTER </LayoutWrapper> `}
            </Highlighter>
          </Column>
          <Column>
            <Panel paddingBottom={10}>
              <Heading type="h4" weight={300}>Properties</Heading>
            </Panel>
            <Table dataSource={this.state.properties} headerComponent={propertiesHeader} rowComponent={propertiesRow} />
          </Column>
        </Row>
      </div>
    );
  }
}

export default Layout;
