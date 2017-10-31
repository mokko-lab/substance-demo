import React, {Component} from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/styles';

import { theme } from 'substance-ui';
import { Row, Column, Panel } from 'substance-ui/lib/components/Layouts';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';
import { Card } from 'substance-ui/lib/components/Card';

import Pallet from '../components/Pallet';
import { CodeBlock } from '../components/CodeBlock';


const codeBlock2 = `
  // App.js
  import React, {Component} from 'react';
  import { makeTheme, ThemeProvider } from 'substance-ui/theme';


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
      bg: '#FFFFFF',
      width: 300,
      links: {
        padding: '0px 40px',
        fontSize: 15,
        fontWeight: 300,
        lineHeight: '50px',
        color: '#888888',
        activeFontSize: 22,
        activeFontWeight: 800,
        activeColor: '#313131'
      },
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

  render() {
    return (
      <div>
        <Panel paddingTop={100} paddingBottom={40}>
          <Heading type="h2" weight={800} margin={0}>Theme</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
        </Panel>
        <Row gutter={40} columnsCount={2}>
          <Column matchHeight>
            <Card>
              <Panel padding={30}>
                <Panel paddingBottom={30}>
                  <Heading type="h5">Colors</Heading>
                </Panel>
                <Panel childSpacing={20}>
                  <Pallet height={80} label="Primary" color={theme.colors.primary}/>
                  <Pallet height={80} label="Secondary" color={theme.colors.secondary}/>
                  <Pallet height={80} label="Monochrome" color={theme.colors.monochrome}/>
                  <Pallet label="Heading" height={50} color={theme.colors.heading}/>
                  <Pallet label="Paragraph" height={50} color={theme.colors.paragraph}/>
                  <Pallet label="Success" height={40} color={theme.colors.success}/>
                  <Pallet label="Warning" height={40} color={theme.colors.warning}/>
                  <Pallet label="Error" height={40} color={theme.colors.error}/>
                </Panel>
              </Panel>
            </Card>
          </Column>
          <Column matchHeight>
            <Card>
              <CodeBlock visible={true}>
                <SyntaxHighlighter wrapLines={true} language='html, jsx, javascript' style={ocean}>
                  {codeBlock2}
                </SyntaxHighlighter>
              </CodeBlock>
            </Card>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Theme;
