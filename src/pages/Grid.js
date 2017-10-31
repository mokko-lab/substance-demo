import React, {Component} from 'react';
import styled from 'styled-components';

import { Row, Column, Panel } from 'substance-ui/lib/components/Layouts';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';
import { Card } from 'substance-ui/lib/components/Card';


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
    }
  }

  render() {
    return (
      <div>
        <Panel paddingTop={100} paddingBottom={40}>
          <Heading type="h2" weight={800} margin={0}>Grid</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Layouts in Substance-UI makes the site user-friendly, functional and make it look attractive for customers to stay on the site.</Paragraph>
        </Panel>

        <Row gutter={40}>
          <Column>
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

export default Grid;
