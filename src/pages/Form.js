import React, {Component} from 'react';

import { FaCalendarO, FaEnvelopeO } from 'react-icons/lib/fa';

import { Row, Column, Panel } from 'substance-ui/lib/components/Layouts';
import { Card } from 'substance-ui/lib/components/Card';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';
import { TextInput } from 'substance-ui/lib/components/Forms';


class Form extends Component {

  constructor() {
    super();
    this.state = {
      value1: '',
      value2: ''
    };
  }

  handleValue1Change = (event) => {
    this.setState({ value: event.target.value });
  };
  handleValue2Change = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {


      return (
        <div>
          <Panel paddingTop={100} paddingBottom={40}>
            <Heading type="h2" weight={800} margin={0}>Form Elements</Heading>
            <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
          </Panel>

        <Row gutter={40} columnsCount={2}>
          <Column matchHeight>
            <Card>
              <Panel padding={30}>
                <Panel paddingBottom={30}>
                  <Heading type="h5">Text Fields</Heading>
                </Panel>
                <Panel childSpacing={50}>
                  <TextInput type="text" placeholder="Enter Your Text..." />
                  <TextInput type="text" placeholder="Placeholder Text..." label="Input with Label"  />
                  <TextInput type="text" value={this.state.value} onChange={this.handleValue1Change} label="Input with Floating Label" floating={true} />
                  <TextInput type="text" placeholder="Input with Icon..." icon={<FaCalendarO />} floating={true} />
                  <TextInput type="text" value={this.state.value2} onChange={this.handleValue2Change} label="Floating Label with Icon" icon={<FaEnvelopeO />} floating={true} />
                  <TextInput type="text" label="Input Error" error={true} />
                  <TextInput type="text" label="Input Error" success={true} />
                </Panel>

              </Panel>
            </Card>
          </Column>
          <Column matchHeight>
            <Card>
              <Panel padding={30}>
                <Panel paddingBottom={30}>
                  <Heading type="h5">Dropdown & Radio</Heading>
                </Panel>

              </Panel>
            </Card>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Form;
