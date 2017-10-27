import React, {Component} from 'react';
import styled from 'styled-components';
import MdCode from 'react-icons/lib/md/code';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {ocean} from 'react-syntax-highlighter/dist/styles';

import { Padded, Row, Column, Panel } from 'substance-ui/lib/components/Layouts';
import { Card } from 'substance-ui/lib/components/Cards';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';
import { AreaChart, BarChart, StackChart, PieChart } from 'substance-ui/lib/components/Charts';

import theme from '../theme';
import {CodeBlock, IconButton, Close} from '../components/CodeBlock';

const codeBlock1 = `

    import { AreaChart } from 'substance-ui/lib/components/Charts';

    class Chart extends Component {

      constructor(props) {
        super(props);
        this.state = {
          data: [
              { x: 1, y: 2},
              { x: 2, y: 3},
              { x: 3, y: 5},
              { x: 4, y: 4},
              { x: 5, y: 6}
            ]
        }
      }

      render() {
        return (
          <AreaChart
            height={270}
            animation={{
              duration: 2000,
              onLoad: {
                duration: 1000
              }
            }}
            chartStyle={{
              fill: theme.colors.primary
            }}
            data={this.state.data}
          />
        )
      }
    }

`
const codeBlock2 = `

    import { BarChart } from 'substance-ui/lib/components/Charts';

    <BarChart
      height={270}
      animation={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}
      chartStyle={{
        fill: theme.colors.secondary,
        width: 20
      }}
      data={BarChartData}
    />

`
const codeBlock3 = `

    import { StackChart } from 'substance-ui/lib/components/Charts';

    <StackChart
      animation={{
        duration: 2000,
        onLoad: {
          duration: 1000
        }
      }}
      curves={true}
      dataColors={['#DD105E', '#46466E']}
      data={[StackChartData1, StackChartData2]}
    />

`
const codeBlock4 = `

    import { PieChart } from 'substance-ui/lib/components/Charts';

    <PieChart
      innerRadius={60}
      height={250}
      animation={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}
      dataColors={['#303A52', '#574B90', '#9E579D', '#FC85AE']}
      data={PieData}
    />
`

class Charts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      block1: false,
      block2: false,
      block3: false,
      block4: false
    }
  }

  render() {

      let AreaChartData = [
        { x: 1, y: 2},
        { x: 2, y: 3},
        { x: 3, y: 5},
        { x: 4, y: 4},
        { x: 5, y: 6}
      ]
      let BarChartData = [
        { x: 1, y: 2},
        { x: 2, y: 3},
        { x: 3, y: 5},
        { x: 4, y: 4},
        { x: 5, y: 6}
      ]
      let StackChartData1 = [
        { x: 1, y: 2},
        { x: 2, y: 3},
        { x: 3, y: 5},
        { x: 4, y: 4},
        { x: 5, y: 6}
      ]
      let StackChartData2 = [
        { x: 1, y: 0},
        { x: 2, y: 2},
        { x: 3, y: 2},
        { x: 4, y: 5},
        { x: 5, y: 2}
      ]
      let PieData = [
        { x: "Cats", y: 35 },
        { x: "Dogs", y: 40 },
        { x: "Birds", y: 55 },
        { x: "Humans", y: 70 }
      ]

    return (
      <div>

        <Padded top={10} bottom={4}>
          <Heading type="h2" weight={800} margin={0}>Charts</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
        </Padded>

        <Row gutter={40} columnsCount={2}>
          <Column matchHeight>
              <Card>
                <IconButton onClick={() => this.setState({block1: true})}>
                  <MdCode size={24}/>
                </IconButton>
                <CodeBlock visible={this.state.block1}>
                  <Close onClick={() => this.setState({block1: false})}>
                    <span></span>
                  </Close>
                  <SyntaxHighlighter wrapLines={true} language='html, javascript, babel' style={ocean}>
                    {codeBlock1}
                  </SyntaxHighlighter>
                </CodeBlock>

                <Padded all={3}>
                  <Padded bottom={4}>
                    <Heading type="h5">Area Chart</Heading>
                  </Padded>
                  <AreaChart height={270} animation={{
                    duration: 2000,
                    onLoad: {
                      duration: 1000
                    }
                  }} chartStyle={{
                    fill: theme.colors.primary
                  }} data={AreaChartData}/>
                </Padded>
              </Card>
          </Column>
          <Column matchHeight>
            <Card>
              <IconButton onClick={() => this.setState({block2: true})}>
                <MdCode size={24}/>
              </IconButton>
              <CodeBlock visible={this.state.block2}>
                <Close onClick={() => this.setState({block2: false})}>
                  <span></span>
                </Close>
                <SyntaxHighlighter wrapLines={true} language='html, jsx, javascript' style={ocean}>
                  {codeBlock2}
                </SyntaxHighlighter>
              </CodeBlock>
              <Padded all={3}>
                <Padded bottom={4}>
                  <Heading type="h5">Bar Chart</Heading>
                </Padded>
                <BarChart height={270} animation={{
                  duration: 2000,
                  onLoad: {
                    duration: 1000
                  }
                }} chartStyle={{
                  fill: theme.colors.secondary,
                  width: 20
                }} data={BarChartData}/>
              </Padded>
            </Card>
          </Column>
          <Column matchHeight>
            <Card>
              <IconButton onClick={() => this.setState({block3: true})}>
                <MdCode size={24}/>
              </IconButton>
              <CodeBlock visible={this.state.block3}>
                <Close onClick={() => this.setState({block3: false})}>
                  <span></span>
                </Close>
                <SyntaxHighlighter wrapLines={true} language='html, jsx, javascript' style={ocean}>
                  {codeBlock3}
                </SyntaxHighlighter>
              </CodeBlock>
              <Padded all={3}>
                <Padded bottom={4}>
                  <Heading type="h5">Stack Chart</Heading>
                </Padded>
                <StackChart animation={{
                  duration: 2000,
                  onLoad: {
                    duration: 1000
                  }
                }} curves={true} dataColors={['#DD105E', '#46466E']} data={[StackChartData1, StackChartData2]}/>
              </Padded>
            </Card>
          </Column>
          <Column matchHeight>
            <Card>
              <IconButton onClick={() => this.setState({block4: true})}>
                <MdCode size={24}/>
              </IconButton>
              <CodeBlock visible={this.state.block4}>
                <Close onClick={() => this.setState({block4: false})}>
                  <span></span>
                </Close>
                <SyntaxHighlighter wrapLines={true} language='html, jsx, javascript' style={ocean}>
                  {codeBlock4}
                </SyntaxHighlighter>
              </CodeBlock>
              <Padded all={3}>
                <Padded bottom={4}>
                  <Heading type="h5">Pie Chart</Heading>
                </Padded>
                <PieChart innerRadius={60} height={250} animation={{
                  duration: 2000,
                  onLoad: {
                    duration: 1000
                  }
                }} dataColors={['#303A52', '#574B90', '#9E579D', '#FC85AE']} data={PieData}/>
              </Padded>
            </Card>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Charts;
