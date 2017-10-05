import React, {Component} from 'react';
import { Card, Padded, Row, Column } from 'substance-ui';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';
import { AreaChart, BarChart, StackChart, PieChart } from 'substance-ui/lib/components/Charts';

import theme from '../theme';
import Container from '../components/container';


class Form extends Component {

  render() {


      return (
        <Container>

          <Padded padding="70px 0px 50px 0px">
            <Heading type="h2" weight={800} margin={0}>Form Elements</Heading>
            <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
          </Padded>

        <Row gutter={40} columnsCount={2}>
          <Column matchHeight>
            <Card>
              <Padded padding="30px 20px 20px 30px">
                <Padded padding="0 0 30px 0">
                  <Heading type="h5">Text Fields</Heading>
                </Padded>

              </Padded>
            </Card>
          </Column>
          <Column matchHeight>
            <Card>
              <Padded padding="30px 20px 20px 30px">
                <Padded padding="0 0 30px 0">
                  <Heading type="h5">Dropdown & Radio</Heading>
                </Padded>

              </Padded>
            </Card>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Form;
