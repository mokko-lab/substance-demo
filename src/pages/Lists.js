import React, {Component} from 'react';
import { IoChevronRight } from 'react-icons/lib/io'

import { Panel, Split, SplitColumn } from 'substance-ui/lib/components/Layouts';
import { Card } from 'substance-ui/lib/components/Card';
import { Heading, Paragraph } from 'substance-ui/lib/components/Typography';
import { Grid, List, ListItem } from 'substance-ui/lib/components/Lists';
import { Loader } from 'substance-ui/lib/components/Misc';

class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      data3: []
    }
  }

  componentWillMount = () => {
     this.makeRemoteRequest();
     this.makeRemoteRequest2();
     this.makeRemoteRequest3();
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

 makeRemoteRequest2 = () => {
  const url = `https://api.iconfinder.com/v3/iconsets/filled-line-christmas-icons/icons?client_id=5AN80mUPOQJFcbXyKv9IjlPft4qv1y9SEQIdu7KIsJFlel2xx8e5eQCyLojmKT7E&client_secret=ZnM1Ad908MOhRloIfGJIcah35qQBFFwyekwXQEuhdrAS16rst8aFcgmtr50DowvO&query=emoji&count=30`;
  fetch(url)
    .then(res => res.json())
    .then(res => {
      this.setState({
        data2: res.icons
      });
    })
};

makeRemoteRequest3 = () => {
 const url = `https://api.iconfinder.com/v3/iconsets/food-set-3/icons?client_id=5AN80mUPOQJFcbXyKv9IjlPft4qv1y9SEQIdu7KIsJFlel2xx8e5eQCyLojmKT7E&client_secret=ZnM1Ad908MOhRloIfGJIcah35qQBFFwyekwXQEuhdrAS16rst8aFcgmtr50DowvO&query=emoji&count=30`;
 fetch(url)
   .then(res => res.json())
   .then(res => {
     this.setState({
       data3: res.icons
     });
   })
};



  listComponent = (item, index) => {
    return (
      <ListItem label={this.toTitleCase(item.name.first) + ' ' + this.toTitleCase(item.name.last)} />
    )
  }

  listComponent2 = (item, index) => {
    return (
      <ListItem hover={true} label={this.toTitleCase(item.name.first) + ' ' + this.toTitleCase(item.name.last)} avatar={item.picture.medium} rightIcon={<IoChevronRight />} />
    )
  }

  listComponent3 = (item, index) => {
    return (
      <ListItem label={this.toTitleCase(item.name.first) + ' ' + this.toTitleCase(item.name.last)} subText={item.email} avatar={item.picture.medium} />
    )
  }

  listComponent4 = (item, index) => {
    return (
      <ListItem subText={item.styles[0].name} label={this.toTitleCase(item.tags[0]) + ' ' + this.toTitleCase(item.tags[1])} avatar={item.raster_sizes[8].formats[0].preview_url} />
    )
  }

  listComponent5 = (item, index) => {
    return (
      <div key={index}>
        <div style={{padding: '30px'}}>
          <img src={item.raster_sizes[8].formats[0].preview_url} style={{width: '100%', height:'auto'}} alt="" />
        </div>
        <Paragraph size="small">{this.toTitleCase(item.tags[0]) + ' ' + this.toTitleCase(item.tags[1])}</Paragraph>
      </div>
    )
  }

  toTitleCase(str) {
     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  render() {
    return (
      <div>

        <Panel paddingTop={100} paddingBottom={40}>
          <Heading type="h2" weight={800} margin={0}>List</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">List are a flexible and powerful component for displaying a series of content. <br />Modify them the way you want to.</Paragraph>
        </Panel>

        <Split gutter={40} ratio={[1,1,1]}>
          <SplitColumn matchHeight>
            <Card>
                <Panel padding={20}>
                  <Heading type="h5">Basic List</Heading>
                </Panel>
                <List
                  dataSource={this.state.data}
                  listComponent={this.listComponent}
                  loadingComponent={<Loader />}
                  itemsPerPage={10}
                 />
            </Card>
          </SplitColumn>
          <SplitColumn matchHeight>
            <Card>
                <Panel padding={20}>
                  <Heading type="h5">List with Thumb</Heading>
                </Panel>
                <List
                  enableHover={true}
                  dataSource={this.state.data}
                  listComponent={this.listComponent2}
                  loadingComponent={<Loader />}
                  itemsPerPage={7}
                 />
            </Card>
          </SplitColumn>
          <SplitColumn matchHeight>
            <Card>
                <Panel padding={20}>
                  <Heading type="h5">List with Summary</Heading>
                </Panel>
                <List
                  dataSource={this.state.data}
                  listComponent={this.listComponent3}
                  loadingComponent={<Loader />}
                  itemsPerPage={7}
                 />
            </Card>
          </SplitColumn>
        </Split>
        <Split gutter={40} ratio={[1,2]}>
          <SplitColumn matchHeight>
            <Card>
              <Panel padding={20}>
                <Heading type="h5">List with Icon SVG</Heading>
              </Panel>
              <List
                dataSource={this.state.data2}
                listComponent={this.listComponent4}
                itemsPerPage={7}
               />
            </Card>
          </SplitColumn>
          <SplitColumn matchHeight>
            <Card>
              <Panel padding={20}>
                <Heading type="h5">List Grid</Heading>
              </Panel>
              <Panel padding={30}>
                <Grid
                  gutter={20}
                  columnsCount={6}
                  dataSource={this.state.data3}
                  listComponent={this.listComponent5}
                  itemsPerPage={18}
                 />
              </Panel>
            </Card>
          </SplitColumn>
        </Split>
      </div>

      );
    }
  }

export default Lists;
