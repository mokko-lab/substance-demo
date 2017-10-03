import React, {Component} from 'react';
import ListDemo from '../components/ListDemo';
import { Card, Padded, Row, Column, Heading, Paragraph, List, ListItem } from 'substance-ui';
import Container from '../components/container';
import { IoChevronRight, IoPlus, IoMore, IoTrashB } from 'react-icons/lib/io'


class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount = () => {
     this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
   const url = `https://randomuser.me/api/?results=54`;
   fetch(url)
     .then(res => res.json())
     .then(res => {
       this.setState({
         data: res.results
       });
     })
 };

  listComponent = (item, index) => {
    console.log('Iten' + item);
    return (
      <ListItem label={this.toTitleCase(item.name.first) + ' ' + this.toTitleCase(item.name.last)} />
    )
  }

  listComponent2 = (item, index) => {
    console.log('Iten' + item);
    return (
      <ListItem hover={true} label={this.toTitleCase(item.name.first) + ' ' + this.toTitleCase(item.name.last)} avatar={item.picture.medium} />
    )
  }

  listComponent3 = (item, index) => {
    console.log('Iten' + item);
    return (
      <ListItem label={this.toTitleCase(item.name.first) + ' ' + this.toTitleCase(item.name.last)} subText={item.email} avatar={item.picture.medium} />
    )
  }

  toTitleCase(str) {
     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  render() {
    return (
      <Container>

        <Padded padding="70px 0px 50px 0px">
          <Heading type="h2" weight={800} margin={0}>List</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
        </Padded>

        <Row gutter={40} columnsCount={3}>
          <Column matchHeight>
            <Card>
                <Padded padding="20px">
                  <Heading type="h5">Basic List</Heading>
                </Padded>
                <List
                  dataSource={this.state.data}
                  listComponent={this.listComponent}
                  itemsPerPage={10}
                 />
            </Card>
          </Column>
          <Column matchHeight>
            <Card>
                <Padded padding="20px">
                  <Heading type="h5">List with Thumb</Heading>
                </Padded>
                <List
                  dataSource={this.state.data}
                  listComponent={this.listComponent2}
                  itemsPerPage={7}
                 />
            </Card>
          </Column>
          <Column matchHeight>
            <Card>
                <Padded padding="20px">
                  <Heading type="h5">List with Summary</Heading>
                </Padded>
                <List
                  dataSource={this.state.data}
                  listComponent={this.listComponent3}
                  itemsPerPage={7}
                 />
            </Card>
          </Column>
        </Row>


      </Container>

      );
    }
  }

export default Lists;
