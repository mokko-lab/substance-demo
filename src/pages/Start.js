import React, {Component} from 'react';

import { Panel, Heading, Paragraph, Row, Column } from 'substance-ui';

import Highlighter from './../components/Highlighter';

class Start extends Component {

  render() {
    return (
      <div>
        <Panel paddingTop={80} paddingBottom={40}>
          <Heading type="h2" weight={800} margin={0}>Getting Started</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Here you will find instructions on how to install and use Substance-UI in your local environment.</Paragraph>
        </Panel>

        <Row gutter={50} columnsCount={1}>
          <Column>
            <Panel paddingBottom={10}>
              <Heading type="h4" weight={300}>Install</Heading>
            </Panel>
            <Highlighter language="vim">
              {` npm install substance-ui `}
            </Highlighter>
          </Column>
          <Column>
            <Panel paddingBottom={10}>
              <Heading type="h4" weight={300}>Basic Usage</Heading>
            </Panel>
            <Highlighter>
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
          </Highlighter>
          </Column>
        </Row>

      </div>
    );
  }
}

export default Start;
