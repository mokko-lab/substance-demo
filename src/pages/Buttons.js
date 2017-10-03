import React, {Component} from 'react';
import { withTheme, Card, Padded, Row, Column, Heading, Paragraph, Button } from 'substance-ui';
import Container from '../components/container';


class Buttons extends Component {
  render() {
      return (
        <Container>
          <Padded padding="70px 0px 50px 0px">
            <Heading type="h2" weight={800} margin={0}>Buttons</Heading>
            <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
          </Padded>
          <Row gutter={40} columnsCount={3}>
            <Column matchHeight>
              <Card>
                <Padded padding="30px">
                  <Padded padding="0 0 30px 0">
                    <Heading type="h5">Primary</Heading>
                  </Padded>
                  <Padded padding="0 0 30px 0">
                    <Button size="small" color="primary">Small Button</Button><br/>
                    <Button color="primary">Regular Button</Button><br/>
                    <Button size="large" color="primary">Large Button</Button><br/>
                    <Button outline color="primary">Outline Button</Button><br/>
                    <Button outline alt color="primary">Outline Alt Button</Button>
                  </Padded>
                </Padded>
              </Card>
            </Column>
            <Column matchHeight>
              <Card>
                <Padded padding="30px">
                  <Padded padding="0 0 30px 0">
                    <Heading type="h5">Secondary</Heading>
                  </Padded>
                  <Padded padding="0 0 30px 0">
                    <Button size="small" color="secondary">Small Button</Button><br/>
                    <Button color="secondary">Regular Button</Button><br/>
                    <Button size="large" color="secondary">Large Button</Button><br/>
                    <Button outline color="secondary">Outline Button</Button><br/>
                    <Button outline alt color="secondary">Outline Alt Button</Button>
                  </Padded>
                </Padded>
              </Card>
            </Column>
            <Column matchHeight>
              <Card>
                <Padded padding="30px">
                  <Padded padding="0 0 30px 0">
                    <Heading type="h5">Monochrome</Heading>
                  </Padded>
                  <Padded padding="0 0 30px 0">
                    <Button size="small" color="monochrome">Small Button</Button><br/>
                    <Button color="monochrome">Regular Button</Button><br/>
                    <Button size="large" color="monochrome">Large Button</Button><br/>
                    <Button outline color="monochrome">Outline Button</Button><br/>
                  </Padded>
                </Padded>
              </Card>
            </Column>
            <Column matchHeight>
              <Card>
                <Padded padding="30px">
                  <Padded padding="0 0 30px 0">
                    <Heading type="h5">Success</Heading>
                  </Padded>
                  <Padded padding="0 0 30px 0">
                    <Button size="small" color="success">Small Button</Button><br/>
                    <Button color="success">Regular Button</Button><br/>
                    <Button size="large" color="success">Large Button</Button><br/>
                    <Button outline color="success">Outline Button</Button><br/>
                    <Button outline alt color="success">Outline Alt Button</Button>
                  </Padded>
                </Padded>
              </Card>
            </Column>
            <Column matchHeight>
              <Card>
                <Padded padding="30px">
                  <Padded padding="0 0 30px 0">
                    <Heading type="h5">Warning</Heading>
                  </Padded>
                  <Padded padding="0 0 30px 0">
                    <Button size="small" color="warning">Small Button</Button><br/>
                    <Button color="warning">Regular Button</Button><br/>
                    <Button size="large" color="warning">Large Button</Button><br/>
                    <Button outline color="warning">Outline Button</Button><br/>
                    <Button outline alt color="warning">Outline Alt Button</Button>
                  </Padded>
                </Padded>
              </Card>
            </Column>
            <Column matchHeight>
              <Card>
                <Padded padding="30px">
                  <Padded padding="0 0 30px 0">
                    <Heading type="h5">Error</Heading>
                  </Padded>
                  <Padded padding="0 0 30px 0">
                    <Button size="small" color="error">Small Button</Button><br/>
                    <Button color="error">Regular Button</Button><br/>
                    <Button size="large" color="error">Large Button</Button><br/>
                    <Button outline color="error">Outline Button</Button><br/>
                    <Button outline alt color="error">Outline Alt Button</Button>
                  </Padded>
                </Padded>
              </Card>
            </Column>
          </Row>

      </Container>
    );
  }
}

export default Buttons;
