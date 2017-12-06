import React, {Component} from 'react';

import { Card, Heading, Paragraph, Row, Column, Panel, Split, SplitColumn, Table } from 'substance-ui';

import { propertiesHeader, propertiesRow } from './../components/PropertiesTable';
import Highlighter from './../components/Highlighter';


class Paragraphs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: [{
        name: 'size',
        type: 'string',
        options: ' xx-large | x-large | large | medium | small | x-small ',
        default: 'medium',
        description: 'The size of the Paragraph text.'
      },
      {
        name: 'color',
        type: 'string',
        options: null,
        default: '#000',
        description: 'Color for paragraph text.'
      },
      {
        name: 'weight',
        type: 'number',
        options: '100 | 300 | 400 | 600 | 800',
        default: '400',
        description: 'Font weight for paragraph.'
      }]
    }
  }


  render() {
    return (
      <div>
        <Panel paddingTop={80} paddingBottom={50}>
          <Heading type="h2" weight={800} margin={0}>Paragraph</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
        </Panel>


        <Row gutter={50} columnsCount={1}>
          <Column>
            <Card>
              <Panel padding={30}>
                <Panel childSpacing={30}>
                  <Paragraph size="xx-large" weight={300}><strong>Paragraph XX Large - </strong> And thus in the midst of a city of wild conflict, filled with the alarms of war; with death and destruction reaping their terrible harvest around her, did Dejah Thoris, Princess of Helium, true daughter of Mars.</Paragraph>
                  <Paragraph size="x-large"><strong>Paragraph X Large - </strong> And thus in the midst of a city of wild conflict, filled with the alarms of war; with death and destruction reaping their terrible harvest around her, did Dejah Thoris, Princess of Helium, true daughter of Mars.</Paragraph>
                  <Paragraph size="large"><strong>Paragraph XX Large - </strong>And thus in the midst of a city of wild conflict, filled with the alarms of war; with death and destruction reaping their terrible harvest around her, did Dejah Thoris, Princess of Helium, true daughter of Mars.</Paragraph>
                  <Paragraph size="medium"><strong>Paragraph Medium / Default -  </strong>And thus in the midst of a city of wild conflict, filled with the alarms of war; with death and destruction reaping their terrible harvest around her, did Dejah Thoris, Princess of Helium, true daughter of Mars, the God of War, promise herself in marriage to John Carter, Gentleman of Virginia.</Paragraph>
                  <Paragraph size="small"><strong>Paragraph Small - </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum. And thus in the midst of a city of wild conflict, filled with the alarms of war; with death and destruction reaping their terrible harvest around her, did Dejah Thoris, Princess of Helium, true daughter of Mars, the God of War, promise herself in marriage to John Carter, Gentleman of Virginia.</Paragraph>
                  <Paragraph size="x-small"><strong>Paragraph x-small - </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum</Paragraph>
                  <code>A piece of computer code</code>
                </Panel>
              </Panel>
            </Card>
          </Column>
          <Column>
            <Panel paddingBottom={10}>
              <Heading type="h4" weight={300}>Usage</Heading>
            </Panel>
            <Highlighter>
                {` <Paragraph size="large"> Paragraph </Paragraph> `}
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

export default Paragraphs;
