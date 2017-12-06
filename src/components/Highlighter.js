import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/styles';


export default class Highlighter extends React.Component {
  render(){
    return (
      <span style={{'display': this.props.block ? 'block' : 'inline-block'}}>
        <SyntaxHighlighter useInlineStyles={true} language={this.props.language ? this.props.language : 'babel'} style={ocean}>
          {this.props.children}
        </SyntaxHighlighter>
      </span>
    )
  };
}
