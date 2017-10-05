import React, {Component} from 'react';

import { withTheme, Card, Row, Column, Padded } from 'substance-ui';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';

import Container from '../components/container';


import Dot from '../components/Dot';

class Theme extends Component {
  render() {
    return (
      <Container>

        <Padded padding="70px 0px 50px 0px">
          <Heading type="h2" weight={800} margin={0}>Theme</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
        </Padded>

        <Row gutter={40} columnsCount={2}>
          <Column matchHeight>
            <Card>
              <Padded padding="30px">
                <Padded padding="0 0 50px 0">
                  <Heading type="h5">Theme</Heading>
                </Padded>
                <Dot color={this.props.theme.colors.primary}>Primary</Dot>
                <Dot color={this.props.theme.colors.secondary}>Secondary</Dot>
                <br/>
                <Dot color={this.props.theme.colors.success} size={76}>Success</Dot>
                <Dot color={this.props.theme.colors.warning} size={76}>Warning</Dot>
                <Dot color={this.props.theme.colors.error} size={76}>Error</Dot>
              </Padded>
            </Card>
          </Column>
          <Column matchHeight>
            <Card>
              <Padded padding="30px">
                <Padded padding="0 0 30px 0">
                  <Heading type="h5">Typography</Heading>
                </Padded>
                <Padded padding="0 0 30px 0">
                  <Heading type="h1">H1 - Heading</Heading>
                  <Heading type="h2">H2 - Heading</Heading>
                  <Heading type="h3">H3 - Heading</Heading>
                  <Heading type="h4">H4 - Heading</Heading>
                  <Heading type="h5">H5 - Heading</Heading>
                  <Heading type="h6">H6 - Heading</Heading>
                </Padded>
                <Paragraph size="x-small">Paragraph - x-small Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  laborum</Paragraph>
                <Paragraph size="small">Paragraph - small Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  laborum</Paragraph>
                <Paragraph>Paragraph - default Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  laborum</Paragraph>
                <Paragraph size="medium">Paragraph - medium Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  laborum</Paragraph>
                <Paragraph size="large">Paragraph - default Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  laborum</Paragraph>
                <code>A piece of computer code</code>
              </Padded>
            </Card>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default withTheme(Theme);
