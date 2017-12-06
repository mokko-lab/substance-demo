import React, {Component} from 'react';

import MdCode from 'react-icons/lib/md/code';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/styles';

import { Row, Column, Panel, Split, SplitColumn } from 'substance-ui/lib/components/Layouts';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';
import { Card } from 'substance-ui/lib/components/Card';

import { CodeBlock, IconButton, Close} from '../components/CodeBlock';


const codeBlock1 = `

    import {Heading } from 'substance-ui/lib/components/Typography';

    <Heading type="h1">
      H1 - Heading
    </Heading>
    <Heading type="h2">
      H2 - Heading
    </Heading>
    <Heading type="h3">
      H3 - Heading
    </Heading>
    <Heading type="h4">
      H4 - Heading
    </Heading>
    <Heading type="h5">
      H5 - Heading
    </Heading>
    <Heading type="h6">
      H6 - Heading
    </Heading>

`

const codeBlock2 = `

    import { Paragraph} from 'substance-ui/lib/components/Typography';

    <Paragraph size="x-small">
      Paragraph - x-small
    </Paragraph>
    <Paragraph size="small">
      Paragraph - small
    </Paragraph>
    <Paragraph>
      Paragraph - default
    </Paragraph>
    <Paragraph size="medium">
      Paragraph - medium
    </Paragraph>
    <Paragraph size="large">
      aragraph - large
    </Paragraph>
    <code>
      A piece of computer code
    </code>

`

class Theme extends Component {

  constructor(props) {
    super(props);
    this.state = {
      block1: false,
      block2: false
    }
  }

  render() {
    return (
      <div>
        <Panel paddingTop={100} paddingBottom={50}>
          <Heading type="h2" weight={800} margin={0}>Typography</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
        </Panel>

        <Row gutter={40}>
          <Column>
            <Panel paddingBottom={20}>
              <Heading type="h4" weight={800} margin={0}>Heading</Heading>
            </Panel>
            <Row gutter={20} columnsCount={1}>
              <Column>
                <Card>
                  <IconButton onClick={() => this.setState({ block1: true })}>
                    <MdCode size={24}/>
                  </IconButton>
                  <CodeBlock visible={this.state.block1}>
                    <Close onClick={() => this.setState({ block1: false })}><span></span></Close>
                    <SyntaxHighlighter wrapLines={true} language='html, jsx, javascript' style={ocean}>
                      {codeBlock1}
                    </SyntaxHighlighter>
                  </CodeBlock>
                  <Panel padding={30}>
                    <Panel childSpacing={20}>
                      <Heading type="x-large">XLarge - Heading</Heading>
                      <Heading type="h1">H1 - Heading</Heading>
                      <Heading type="h2">H2 - Heading</Heading>
                      <Heading type="h3">H3 - Heading</Heading>
                      <Heading type="h4">H4 - Heading</Heading>
                      <Heading type="h5">H5 - Heading</Heading>
                      <Heading type="h6">H6 - Heading</Heading>
                    </Panel>
                  </Panel>
                </Card>
              </Column>
              <Column>
                  <Heading type="h4" weight={300}>Usage</Heading>
                  <span style={{'display': 'inline-block'}}>
                    <SyntaxHighlighter useInlineStyles={true} language='babel' style={ocean}>
                      {` <Heading type="x-large"> Heading </Heading> `}
                    </SyntaxHighlighter>
                  </span>
              </Column>
              <Column>
                  <Heading type="h4" weight={300}>Properties</Heading>
                  <span style={{'display': 'inline-block'}}>
                    <SyntaxHighlighter useInlineStyles={true} language='babel' style={ocean}>
                      {` <Heading type="x-large"> Heading </Heading> `}
                    </SyntaxHighlighter>
                  </span>
              </Column>
            </Row>
          </Column>
          <Column>
            <Panel paddingBottom={20}>
              <Heading type="h4" weight={800} margin={0}>Paragraph</Heading>
            </Panel>
            <Row gutter={40} columnsCount={1}>
              <Column matchHeight>
                <Card>
                  <IconButton onClick={() => this.setState({ block2: true })}>
                    <MdCode size={24}/>
                  </IconButton>
                  <CodeBlock visible={this.state.block2}>
                    <Close onClick={() => this.setState({ block2: false })}><span></span></Close>
                    <SyntaxHighlighter wrapLines={true} language='html, jsx, javascript' style={ocean}>
                      {codeBlock2}
                    </SyntaxHighlighter>
                  </CodeBlock>
                  <Panel padding={30}>
                    <Panel childSpacing={20}>
                      <Paragraph size="large">Paragraph - large Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum</Paragraph>
                      <Paragraph size="medium">Paragraph - medium Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum</Paragraph>
                      <Paragraph>Paragraph - default Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</Paragraph>
                      <Paragraph size="small">Paragraph - small Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum</Paragraph>
                      <Paragraph size="x-small">Paragraph - x-small Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum</Paragraph>
                      <code>A piece of computer code</code>
                    </Panel>
                  </Panel>
                </Card>
              </Column>
              <Column matchHeight>
                <Panel paddingTop={10} paddingBottom={30}>
                  <Heading type="h4">Usage</Heading>
                  <span style={{'display': 'inline-block'}}>
                    <SyntaxHighlighter useInlineStyles={true} language='babel' style={ocean}>
                      {` <Paragraph size="large"> Paragraph </Paragraph> `}
                    </SyntaxHighlighter>
                  </span>
                </Panel>
              </Column>
            </Row>
          </Column>
          <Column>
            <Card>
              <Panel padding={30}>
                <Panel paddingBottom={30}>
                  <Heading type="h3">Main section</Heading>
                </Panel>
                <Paragraph size="large">And thus in the midst of a city of wild conflict, filled with the alarms of war; with death and destruction reaping their terrible harvest around her, did Dejah Thoris, Princess of Helium, true daughter of Mars, the God of War, promise herself in marriage to John Carter, Gentleman of Virginia.
                  Sometime later Tars Tarkas and Kantos Kan returned to report that Zodanga had been completely reduced. Her forces were entirely destroyed or captured, and no further resistance was to be expected from within. Several battleships had escaped, but there were thousands of war and merchant vessels under guard of Thark warriors.At the foot of the throne these two parties separated and halted, facing each other at opposite sides of the aisle. Then came more dignitaries, and the officers of the palace and of the army, and finally two figures entirely muffled in scarlet silk, so that not a feature of either was discernible. These two stopped at the foot of the throne, facing Than Kosis. When the balance of the procession had entered and assumed their stations Than Kosis addressed the couple standing before him. I could not hear his words, but presently two officers advanced and removed the scarlet robe from one of the figures, and I saw that Kantos Kan had failed in his mission, for it was Sab Than, Prince of Zodanga, who stood revealed before me.
                </Paragraph>
              </Panel>
            </Card>
          </Column>
          <Column>
            <Split gutter={50} ratio={[1,2]}>
              <SplitColumn matchHeight>
                <Card>
                  <Panel padding={30}>
                    <Panel paddingBottom={30}>
                      <Heading type="h4">Sub section 1</Heading>
                    </Panel>
                    <Paragraph>And thus in the midst of a city of wild conflict, filled with the alarms of war; with death and destruction reaping their terrible harvest around her, did Dejah Thoris, Princess of Helium, true daughter of Mars, the God of War, promise herself in marriage to John Carter, Gentleman of Virginia.
          Sometime later Tars Tarkas and Kantos Kan returned to report that Zodanga had been completely reduced. Her forces were entirely destroyed or captured, and no further resistance was to be expected from within. Several battleships had escaped, but there were thousands of war and merchant vessels under guard of Thark warriors.At the foot of the throne these two parties separated and halted, facing each other at opposite sides of the aisle. Then came more dignitaries, and the officers of the palace and of the army, and finally two figures entirely muffled </Paragraph>
                  </Panel>
                </Card>
              </SplitColumn>
              <SplitColumn matchHeight>
                <Card>
                  <Panel padding={30}>
                    <Panel paddingBottom={30}>
                      <Heading type="h4">Sub section 2</Heading>
                    </Panel>
                    <Paragraph>And thus in the midst of a city of wild conflict, filled with the alarms of war; with death and destruction reaping their terrible harvest around her, did Dejah Thoris, Princess of Helium, true daughter of Mars, the God of War, promise herself in marriage to John Carter, Gentleman of Virginia.
          Sometime later Tars Tarkas and Kantos Kan returned to report that Zodanga had been completely reduced. Her forces were entirely destroyed or captured, and no further resistance was to be expected from within. Several battleships had escaped, but there were thousands of war and merchant vessels under guard of Thark warriors.At the foot of the throne these two parties separated and halted, facing each other at opposite sides of the aisle. Then came more dignitaries, and the officers of the palace and of the army, and finally two figures entirely muffled </Paragraph>
                  </Panel>
                </Card>
              </SplitColumn>
            </Split>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Theme;
