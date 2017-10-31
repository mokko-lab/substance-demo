import React, {Component} from 'react';
import styled from 'styled-components';

import MdCode from 'react-icons/lib/md/code';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/styles';

import { theme } from 'substance-ui';
import { Row, Column, Padded, Panel, Split, SplitColumn } from 'substance-ui/lib/components/Layouts';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';
import { Card } from 'substance-ui/lib/components/Card';

import Pallet from '../components/Pallet';
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
        <Padded top={10} bottom={4}>
          <Heading type="h2" weight={800} margin={0}>Typography</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Typography is all about adjusting the text within the design while creating powerful content.
            <br/>
            It is an art of arranging all the content of your Website, giving a feel to it and presenting the information in a professional way.</Paragraph>
        </Padded>

        <Row gutter={40}>
          <Column>
            <Row gutter={40} columnsCount={2}>
              <Column matchHeight>
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
                  <Padded all={3}>
                    <Padded bottom={4}>
                      <Heading type="h5">Heading</Heading>
                    </Padded>
                    <Panel childSpacing={14} padding="0 0 30px 0">
                      <Heading type="h1">H1 - Heading</Heading>
                      <Heading type="h2">H2 - Heading</Heading>
                      <Heading type="h3">H3 - Heading</Heading>
                      <Heading type="h4">H4 - Heading</Heading>
                      <Heading type="h5">H5 - Heading</Heading>
                      <Heading type="h6">H6 - Heading</Heading>
                    </Panel>

                  </Padded>
                </Card>
              </Column>

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
                  <Padded all={3}>
                    <Padded bottom={4}>
                      <Heading type="h5">Paragraph</Heading>
                    </Padded>
                    <Panel childSpacing={14} padding="0 0 30px 0">
                      <Paragraph size="x-small"><strong>Paragraph - x-small</strong> A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.</Paragraph>
                      <Paragraph size="small"><strong>Paragraph - small</strong> A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.</Paragraph>
                      <Paragraph><strong>Paragraph - default</strong> A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.</Paragraph>
                      <Paragraph size="medium"><strong>Paragraph - medium</strong> A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.</Paragraph>
                      <Paragraph size="large"><strong>Paragraph - default</strong> A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.</Paragraph>
                      {/* <code>A piece of computer code</code> */}
                    </Panel>

                  </Padded>
                </Card>
              </Column>
            </Row>
          </Column>
          <Column>

          </Column>
        </Row>

        <Row gutter={40}>
          <Column>
            <Card>
              <Padded all={2}>
              <Padded bottom={2}>
                <Heading type="h3">Main section</Heading>
              </Padded>

                <Paragraph size="large">And thus in the midst of a city of wild conflict, filled with the alarms of war; with death and destruction reaping their terrible harvest around her, did Dejah Thoris, Princess of Helium, true daughter of Mars, the God of War, promise herself in marriage to John Carter, Gentleman of Virginia.

                  Sometime later Tars Tarkas and Kantos Kan returned to report that Zodanga had been completely reduced. Her forces were entirely destroyed or captured, and no further resistance was to be expected from within. Several battleships had escaped, but there were thousands of war and merchant vessels under guard of Thark warriors.At the foot of the throne these two parties separated and halted, facing each other at opposite sides of the aisle. Then came more dignitaries, and the officers of the palace and of the army, and finally two figures entirely muffled in scarlet silk, so that not a feature of either was discernible. These two stopped at the foot of the throne, facing Than Kosis. When the balance of the procession had entered and assumed their stations Than Kosis addressed the couple standing before him. I could not hear his words, but presently two officers advanced and removed the scarlet robe from one of the figures, and I saw that Kantos Kan had failed in his mission, for it was Sab Than, Prince of Zodanga, who stood revealed before me.</Paragraph>
                  </Padded>
              </Card>

          </Column>
        </Row>
        <Panel top={5} bottom={5}>
          <Split gutter={50} columnsCount={2}>
            <Column>
              <Padded bottom={2}>
                <Heading type="h4">Sub section 1</Heading>
              </Padded>
              <Paragraph>And thus in the midst of a city of wild conflict, filled with the alarms of war; with death and destruction reaping their terrible harvest around her, did Dejah Thoris, Princess of Helium, true daughter of Mars, the God of War, promise herself in marriage to John Carter, Gentleman of Virginia.
    Sometime later Tars Tarkas and Kantos Kan returned to report that Zodanga had been completely reduced. Her forces were entirely destroyed or captured, and no further resistance was to be expected from within. Several battleships had escaped, but there were thousands of war and merchant vessels under guard of Thark warriors.At the foot of the throne these two parties separated and halted, facing each other at opposite sides of the aisle. Then came more dignitaries, and the officers of the palace and of the army, and finally two figures entirely muffled </Paragraph>
            </Column>
            <Column>
              <Padded bottom={2}>
                <Heading type="h4">Sub section 2</Heading>
              </Padded>
              <Paragraph>And thus in the midst of a city of wild conflict, filled with the alarms of war; with death and destruction reaping their terrible harvest around her, did Dejah Thoris, Princess of Helium, true daughter of Mars, the God of War, promise herself in marriage to John Carter, Gentleman of Virginia.
    Sometime later Tars Tarkas and Kantos Kan returned to report that Zodanga had been completely reduced. Her forces were entirely destroyed or captured, and no further resistance was to be expected from within. Several battleships had escaped, but there were thousands of war and merchant vessels under guard of Thark warriors.At the foot of the throne these two parties separated and halted, facing each other at opposite sides of the aisle. Then came more dignitaries, and the officers of the palace and of the army, and finally two figures entirely muffled </Paragraph>

            </Column>
          </Split>
        </Panel>

      </div>
    );
  }
}

export default Theme;
