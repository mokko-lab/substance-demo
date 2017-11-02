import React, {Component} from 'react';
import {Row, Column, Panel} from 'substance-ui/lib/components/Layouts';
import {Card} from 'substance-ui/lib/components/Card';
import {Heading, Paragraph} from 'substance-ui/lib/components/Typography';
import { Table } from 'substance-ui/lib/components/Table';



class Tables extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: null
    }
  }

  componentWillMount = () => {
     this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
   const url = `https://randomuser.me/api/?results=30`;
   fetch(url)
     .then(res => res.json())
     .then(res => {
       this.setState({
         data: res.results
       });
     })
 };

  rowComponent = (item, index) => {
    return (
      <tr key={index}>
        <td><Paragraph><strong>{this.toTitleCase(item.name.first) + ' ' + this.toTitleCase(item.name.last)}</strong></Paragraph></td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
      </tr>
    )
  }

  rowComponentHeader = (item, index) => {
    return (
      <tr key={index}>
        <td>Name</td>
        <td>Gender</td>
        <td>Email</td>
        <td>phone</td>
      </tr>
    )
  }
  rowComponent2 = (item, index) => {
    return (
      <tr key={index}>
        <td><Paragraph><strong>{this.toTitleCase(item.name.first) + ' ' + this.toTitleCase(item.name.last)}</strong></Paragraph></td>
        <td>{item.gender}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
      </tr>
    )
  }

  toTitleCase(str) {
     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  render() {
    return(
      <div>
        <Panel paddingTop={100} paddingBottom={40}>
          <Heading type="h2" weight={800} margin={0}>Tables</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
        </Panel>
        <Row gutter={40} columnsCount={2}>
          <Column matchHeight>
            <Card>
              <Panel padding={30}>
                <Panel paddingBottom={30}>
                  <Heading type="h5">Basic Table</Heading>
                </Panel>
                <Table dataSource={this.state.data} rowComponent={this.rowComponent} itemsPerPage={12} />
              </Panel>
            </Card>
          </Column>
          <Column matchHeight>
            <Card>
              <Panel padding={30}>
                <Panel paddingBottom={30}>
                  <Heading type="h5">Table with Header</Heading>
                </Panel>
                <Table dataSource={this.state.data} headerComponent={this.rowComponentHeader} rowComponent={this.rowComponent2} itemsPerPage={10} />
              </Panel>
            </Card>
          </Column>
        </Row>
      </div>
    )
  }
}

export default Tables;
