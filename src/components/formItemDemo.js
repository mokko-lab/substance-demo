import React from 'react';
import {Row, Col} from 'react-styled-flexboxgrid';
import {Card, Padded, List, ListItem, SubstanceForm, Button} from 'substance-ui';

export default class FormDemo extends React.Component {
  render(){
    return(
      <Row>
        <Col xs={12} sm={6} md={4}>
      <Card>
        <Padded>
          <SubstanceForm  type="Text" label="Text Field" title= "Name" placeholder="e.g Manan Shah" />
          <SubstanceForm  type="email"  title= "Email Address" placeholder="e.g Jondoe@gmail.com" />
          <SubstanceForm  type="Number"  title= "Phone Number" placeholder="e.g 9879834162" />
        </Padded>
      </Card></Col></Row>
    )
  };
}
