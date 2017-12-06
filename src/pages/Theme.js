import React, {Component} from 'react';

import { theme, Heading, Paragraph, Row, Column, Panel, Split, SplitColumn, Table, Card } from 'substance-ui';

import Pallet from '../components/Pallet';
import { propertiesHeader, propertiesRow } from '../components/PropertiesTable';
import Highlighter from './../components/Highlighter';


const codeBlock2 = `
  // App.js
  import React, {Component} from 'react';
  import { makeTheme, ThemeProvider } from 'substance-ui';

  const theme = {
    colors: {
      primary: '#1EB0E9',
      secondary: '#FFBF00',
      heading: '#313131', // Heading Text Color
      paragraph: '#888888', // Paragraph Text Color
      monochrome: '#545454',
      success: '#93E522', // Success State
      warning: '#FADB4A', // Warning State
      error: '#FF3E00', // Error State
    },
    fonts: {
      baseSize: '16px', // Base Font Size
      heading: ' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',  // Heading Fonts
      paragraph: ' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' // Paragraph Fonts
    },
    card: {
      bg: '#FFFFFF'
    },
    sidebar: {
    },
    animations: {
      fast: '250ms',
      medium: '500ms',
      slow: '1000ms'
    }
  };

  const myTheme = makeTheme(theme);

  class App extends Component {
    render() {
      return (
          <ThemeProvider theme={myTheme}>
            APP CODE
          </ThemeProvider>
      );
    }
  }

`

class Theme extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: [{
        name: 'theme',
        type: 'object',
        options: '',
        default: '',
        description: 'Theme object contains default theme properties like colors, fonts and components styling options.'
      }]
    }
  }

  render() {
    return (
      <div>
        <Panel paddingTop={80} paddingBottom={40}>
          <Heading type="h2" weight={800} margin={0}>Theme</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
        </Panel>
        <Row gutter={50}>
          <Column>
            <Panel paddingBottom={10}>
              <Heading type="h4" weight={300}>Theme Colors</Heading>
            </Panel>
            <Split gutter={20} ratio={[2,2,1,1,1,1,1]}>
              <SplitColumn matchHeight>
                <Card>
                  <Panel padding={10}>
                      <Pallet label="Primary" color={theme.colors.primary}/>
                  </Panel>
                </Card>
              </SplitColumn>
              <SplitColumn matchHeight>
                <Card>
                  <Panel padding={10}>
                      <Pallet label="Secondary" color={theme.colors.secondary}/>
                  </Panel>
                </Card>
              </SplitColumn>
              <SplitColumn matchHeight>
                <Card>
                  <Panel padding={10}>
                      <Pallet label="Heading" color={theme.colors.heading}/>
                  </Panel>
                </Card>
              </SplitColumn>
              <SplitColumn matchHeight>
                <Card>
                  <Panel padding={10}>
                      <Pallet label="Paragraph" color={theme.colors.paragraph}/>
                  </Panel>
                </Card>
              </SplitColumn>
              <SplitColumn matchHeight>
                <Card>
                  <Panel padding={10}>
                      <Pallet label="Success" color={theme.colors.success}/>
                  </Panel>
                </Card>
              </SplitColumn>
              <SplitColumn matchHeight>
                <Card>
                  <Panel padding={10}>
                      <Pallet label="Warning" color={theme.colors.warning}/>
                  </Panel>
                </Card>
              </SplitColumn>
              <SplitColumn matchHeight>
                <Card>
                  <Panel padding={10}>
                      <Pallet label="Error" color={theme.colors.error}/>
                  </Panel>
                </Card>
              </SplitColumn>
            </Split>
          </Column>
          <Column>
            <Panel paddingBottom={10}>
              <Heading type="h4" weight={300}>Theme Provider</Heading>
            </Panel>
              <Paragraph weight={300}><code> { ` <ThemeProvider> ` } </code> is a wrapper component, This component provides a theme to all React components underneath itself via the context API. In the render tree all Substance UI components will have access to the provided theme. </Paragraph>

            <Highlighter block>
              {codeBlock2}
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

export default Theme;
