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
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Here you will find instructions on how to install and use Substance-UI in your local environment.</Paragraph>
        </Panel>

        <Panel paddingTop={40} paddingBottom={30}>
          <Heading type="h4">Install</Heading>
          <span style={{'display': 'inline-block'}}>
            <SyntaxHighlighter useInlineStyles={true} language='vim' style={ocean}>
              {` npm install substance-ui `}
            </SyntaxHighlighter>
          </span>
        </Panel>

        <Panel paddingTop={40} paddingBottom={30}>
          <Heading type="h4">Basic Usage</Heading>
          <span style={{'display': 'inline-block'}}>
            <SyntaxHighlighter useInlineStyles={true} language='javascript' style={ocean}>
              {`
  import React from 'react';
  import { render } from 'react-dom';
  import { Button } from 'substance-ui';

  function App() {
    return (
      <Button size="small" color="primary">
      Small Button
      </Button>
    );
  }

  render(<App />, document.querySelector('#app'));
          `}
            </SyntaxHighlighter>
          </span>
        </Panel>

        <Panel paddingTop={40} paddingBottom={30}>
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
