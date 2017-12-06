import React, {Component} from 'react';

import { Card, Heading, Paragraph, Row, Column, Panel, Split, SplitColumn, Table } from 'substance-ui';

import { propertiesHeader, propertiesRow } from '../components/PropertiesTable';
import Highlighter from '../components/Highlighter';


class Headings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: [{
        name: 'type',
        type: 'string',
        options: ' x-large | h1 | h2 | h3 | h4 | h5 | h6 ',
        default: 'h1',
        description: 'Choose which HTML tag should be used for heading. x-large uses "h1" tag.'
      },
      {
        name: 'color',
        type: 'string',
        options: null,
        default: '#000',
        description: 'Color for heading.'
      },
      {
        name: 'weight',
        type: 'number',
        options: '100 | 300 | 400 | 600 | 800',
        default: '600',
        description: 'Font weight for heading.'
      }]
    }
  }


  render() {
    return (
      <div>
        <Panel paddingTop={80} paddingBottom={50}>
          <Heading type="h2" weight={800} margin={0}>Heading</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
        </Panel>

        <Row gutter={50} columnsCount={1}>
          <Column>
            <Card>
              <Panel padding={30}>
                <Panel childSpacing={20}>
                  <Heading type="x-large">This is XLarge - Heading</Heading>
                  <Heading type="h1">This is H1 - Heading</Heading>
                  <Heading type="h2">This is H2 - Heading</Heading>
                  <Heading type="h3">This is H3 - Heading</Heading>
                  <Heading type="h4">This is H4 - Heading</Heading>
                  <Heading type="h5">This is H5 - Heading</Heading>
                  <Heading type="h6">This is H6 - Heading</Heading>
                </Panel>
              </Panel>
            </Card>
          </Column>
          <Column>
            <Panel paddingBottom={10}>
              <Heading type="h4" weight={300}>Usage</Heading>
            </Panel>
            <Highlighter>
                {` <Heading type="x-large"> Heading </Heading> `}
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

export default Headings;
