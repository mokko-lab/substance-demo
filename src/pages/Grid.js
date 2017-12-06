import React, {Component} from 'react';
import styled from 'styled-components';

import { Row, Column, Panel, Heading, Paragraph, Card, Table } from 'substance-ui';

import { propertiesHeader, propertiesRow } from '../components/PropertiesTable';
import Highlighter from '../components/Highlighter';

const LabelBox = styled.div`
  background: #efefef;
  position: relative;
  height: 70px;
  border-radius: 3px;
  text-align: center;
  line-height: 70px;
  overflow: hidden;
`

class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      propertiesRow: [{
        name: 'columnsCount',
        type: 'number',
        options: null,
        default: '1',
        description: 'Number of columns inside row.'
      },
      {
        name: 'gutter',
        type: 'number',
        options: null,
        default: '0',
        description: 'Spacing between each columns.'
      }],
      propertiesColumn: [{
        name: 'matchHeight',
        type: 'boolean',
        options: ' true | false',
        default: 'false',
        description: 'If true, all columns in rows will have equal heights.'
      }]
    }
  }

  render() {
    return (
      <div>
        <Panel paddingTop={80} paddingBottom={50}>
          <Heading type="h2" weight={800} margin={0}>Grid</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Layouts in Substance-UI makes the site user-friendly, functional and make it look attractive for customers to stay on the site.</Paragraph>
        </Panel>

        <Row gutter={50} columnsCount={1}>
          <Column>
            <Card>
              <Panel padding={30}>
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
          <Column>
            <Panel paddingBottom={10}>
              <Heading type="h4" weight={300}>Usage</Heading>
            </Panel>
            <Highlighter>
                {`
  import React, {Component} from 'react';
  import { render } from 'react-dom';
  import { Row, Column } from 'substance-ui';

  class Grid extends Component {
    render() {
      return (
        <Row columnsCount={2} gutter={40}>
          <Column>
            Column: 1/2
          </Column>
          <Column>
            Column: 2/2
          </Column>
        </Row>
      );
    }
  }

  render(<GridDemo />, document.querySelector('#app'));
                   `}
            </Highlighter>
          </Column>
          <Column>
            <Panel paddingBottom={10}>
              <Heading type="h4" weight={300}>Properties: <code> Row </code></Heading>
            </Panel>
            <Table dataSource={this.state.propertiesRow} headerComponent={propertiesHeader} rowComponent={propertiesRow} />
          </Column>
          <Column>
            <Panel paddingBottom={10}>
              <Heading type="h4" weight={300}>Properties: <code> Column </code></Heading>
            </Panel>
            <Table dataSource={this.state.propertiesColumn} headerComponent={propertiesHeader} rowComponent={propertiesRow} />
          </Column>
        </Row>
      </div>
    );
  }
}

export default Grid;
