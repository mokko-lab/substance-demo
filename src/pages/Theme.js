import React, {Component} from 'react';
import { Card, Padded, Panel, Row, Column } from 'substance-ui';

import theme from '../theme';

import Dot from '../components/Dot';

class Theme extends Component {
  render() {
    return (
      <div style={{maxWidth: '1700px',margin: '0 auto'}}>

        <Padded padding="60px 0px 40px 0px">
          <h1>Theme</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</p>
        </Padded>

        <Row gutter={30}>
          <Column matchHeight>
            <Card>
              <Padded padding="20px">
                <h5>Theme Provider</h5>

                <Dot color={theme.colors.primary}>Primary</Dot>
                <Dot color={theme.colors.secondary}>Secondary</Dot>
                <br/>
                <Dot color={theme.colors.success} size={76}>Success</Dot>
                <Dot color={theme.colors.warning} size={76}>Warning</Dot>
                <Dot color={theme.colors.error} size={76}>Error</Dot>
              </Padded>
            </Card>
          </Column>
          <Column matchHeight>
            <Card flex>
              <Padded padding="20px">
                <h5>Typography</h5>
                <h1>H1 - Heading</h1>
                <h2>H2 - Heading</h2>
                <h3>H3 - Heading</h3>
                <h4>H4 - Heading</h4>
                <h5>H5 - Heading</h5>
                <h6>H6 - Heading</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <code>A piece of computer code</code>
              </Padded>
            </Card>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Theme;
