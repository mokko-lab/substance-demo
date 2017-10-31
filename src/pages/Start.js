import React, {Component} from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/styles';

import { Panel } from 'substance-ui/lib/components/Layouts';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';


class Start extends Component {

  render() {
    return (
      <div>
        <Panel paddingTop={100} paddingBottom={40}>
          <Heading type="h2" weight={800} margin={0}>Getting Started</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
        </Panel>

        <Panel paddingTop={40} paddingBottom={40}>
          <Heading type="h4">Install</Heading>
          <span style={{'display': 'inline-block'}}>
            <SyntaxHighlighter useInlineStyles={true} language='javascript' style={ocean}>
              {` npm install substance-ui `}
            </SyntaxHighlighter>
          </span>
        </Panel>

        <Panel paddingTop={40} paddingBottom={40}>
          <Heading type="h4">Theme Provider</Heading>
          <span style={{'display': 'inline-block'}}>
            <SyntaxHighlighter useInlineStyles={true} language='JSX' style={ocean}>
              {` <ThemeProvider theme={theme} /> `}
            </SyntaxHighlighter>
          </span>
        </Panel>

      </div>
    );
  }
}

export default Start;
