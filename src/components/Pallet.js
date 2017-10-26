import React from 'react';
import styled from 'styled-components';
import { Paragraph } from 'substance-ui/lib/components/Typography';
import { Panel, Split } from 'substance-ui';

const PalletBase = styled.div`
  background: ${props => props.color};
  text-align: center;
  text-transform: uppercase;
  line-height: ${props => props.size || 80}px;
  color: white;
  height: ${props => props.height || 128}px;
  border-radius: 4px;
`

export default class Pallet extends React.Component {
  render(){
    return (
      <div>
        <PalletBase color={this.props.color} height={this.props.height}>
          {this.props.children}
        </PalletBase>
        <Panel flex justifyContent="space-between">
          <Paragraph size="small"><strong>{this.props.label}</strong></Paragraph>
          <Paragraph size="small">{this.props.color}</Paragraph>
        </Panel>
      </div>
    )
  };
}
