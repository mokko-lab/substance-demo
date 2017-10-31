import React, {Component} from 'react';

import { Row, Column, Panel } from 'substance-ui/lib/components/Layouts';
import { Card } from 'substance-ui/lib/components/Card';
import { Button } from 'substance-ui/lib/components/Buttons';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';


class Buttons extends Component {
  render() {
      return (
        <div>
          <Panel paddingTop={100} paddingBottom={40}>
            <Heading type="h2" weight={800} margin={0}>Buttons</Heading>
            <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
          </Panel>
          <Row gutter={40} columnsCount={3}>
            <Column matchHeight>
              <Card>
                <Panel padding={30}>
                  <Panel paddingBottom={30}>
                    <Heading type="h5">Primary</Heading>
                  </Panel>
                  <Panel paddingBottom={30}>
                    <Button size="small" color="primary">Small Button</Button><br/>
                    <Button color="primary">Regular Button</Button><br/>
                    <Button size="large" color="primary">Large Button</Button><br/>
                    <Button outline color="primary">Outline Button</Button><br/>
                    <Button outline alt color="primary">Outline Alt Button</Button><br/>
                    <Button color="primary" debounce={1}>Press Me</Button><br/>
                    <Button outline size="large" color="primary" debounce={1}>Press Me</Button><br/>
                  </Panel>
                </Panel>
              </Card>
            </Column>
            <Column matchHeight>
              <Card>
                <Panel padding={30}>
                  <Panel paddingBottom={30}>
                    <Heading type="h5">Secondary</Heading>
                  </Panel>
                  <Panel paddingBottom={30}>
                    <Button size="small" color="secondary">Small Button</Button><br/>
                    <Button color="secondary">Regular Button</Button><br/>
                    <Button size="large" color="secondary">Large Button</Button><br/>
                    <Button outline color="secondary">Outline Button</Button><br/>
                    <Button outline alt color="secondary">Outline Alt Button</Button>
                  </Panel>
                </Panel>
              </Card>
            </Column>
            <Column matchHeight>
              <Card>
                <Panel padding={30}>
                  <Panel paddingBottom={30}>
                    <Heading type="h5">Monochrome</Heading>
                  </Panel>
                  <Panel paddingBottom={30}>
                    <Button size="small" color="monochrome">Small Button</Button><br/>
                    <Button color="monochrome">Regular Button</Button><br/>
                    <Button size="large" color="monochrome">Large Button</Button><br/>
                    <Button outline color="monochrome">Outline Button</Button><br/>
                  </Panel>
                </Panel>
              </Card>
            </Column>
            <Column matchHeight>
              <Card>
                <Panel padding={30}>
                  <Panel paddingBottom={30}>
                    <Heading type="h5">Success</Heading>
                  </Panel>
                  <Panel paddingBottom={30}>
                    <Button size="small" color="success">Small Button</Button><br/>
                    <Button color="success">Regular Button</Button><br/>
                    <Button size="large" color="success">Large Button</Button><br/>
                    <Button outline color="success">Outline Button</Button><br/>
                    <Button outline alt color="success">Outline Alt Button</Button>
                  </Panel>
                </Panel>
              </Card>
            </Column>
            <Column matchHeight>
              <Card>
                <Panel padding={30}>
                  <Panel paddingBottom={30}>
                    <Heading type="h5">Warning</Heading>
                  </Panel>
                  <Panel paddingBottom={30}>
                    <Button size="small" color="warning">Small Button</Button><br/>
                    <Button color="warning">Regular Button</Button><br/>
                    <Button size="large" color="warning">Large Button</Button><br/>
                    <Button outline color="warning">Outline Button</Button><br/>
                    <Button outline alt color="warning">Outline Alt Button</Button>
                  </Panel>
                </Panel>
              </Card>
            </Column>
            <Column matchHeight>
              <Card>
                <Panel padding={30}>
                  <Panel paddingBottom={30}>
                    <Heading type="h5">Error</Heading>
                  </Panel>
                  <Panel paddingBottom={30}>
                    <Button size="small" color="error">Small Button</Button><br/>
                    <Button color="error">Regular Button</Button><br/>
                    <Button size="large" color="error">Large Button</Button><br/>
                    <Button outline color="error">Outline Button</Button><br/>
                    <Button outline alt color="error">Outline Alt Button</Button>
                  </Panel>
                </Panel>
              </Card>
            </Column>
          </Row>

      </div>
    );
  }
}

export default Buttons;
