import React, {Component} from 'react';
import { NavLink, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import { Heading, Menu, MenuItem, Panel, Container, LayoutWrapper } from 'substance-ui';

import Home from './Home';
import Start from './Start';
import Theme from './Theme';
import Typography from './Typography';
import Layout from './Layout';
import Grid from './Grid';
import Cards from './Cards';
import Buttons from './Buttons';
import Charts from './Charts';
import Lists from './Lists';
import Tables from './Tables';
import Form from './Form';

// import theme from './theme';

// const myTheme = makeTheme(theme);
// Usage: Wrap app component with <ThemeProvider theme={< YOUR THEME JSON >} />


const customHistory = createBrowserHistory()

const Sidebar = () => {
    return (
      <div>
        <Panel alignment="center" paddingTop={40} paddingBottom={80}>
          <NavLink to='/'>
            <img src={require('./../images/logo.svg')} width="140" alt="" />
          </NavLink>
        </Panel>
        <Panel paddingLeft={40}>
          <Menu layout="vertical" itemColor="#313131" itemSpacing={25} activeFontSize={18} activeColor="black" activeWeight={800}>
            <MenuItem><NavLink exact to='/docs'>Getting Started</NavLink></MenuItem>
            <MenuItem><NavLink to='/docs/theme'>Theme</NavLink></MenuItem>
            <MenuItem><NavLink to='/docs/typography'>Typography</NavLink></MenuItem>
            <MenuItem><NavLink exact to='/docs/layout'>Layout</NavLink></MenuItem>
            <MenuItem><NavLink exact to='/docs/grid'>Grid</NavLink></MenuItem>
            <MenuItem><NavLink to='/docs/charts'>Charts</NavLink></MenuItem>
            <MenuItem><NavLink to='/docs/cards'>Cards</NavLink></MenuItem>
            <MenuItem><NavLink to='/docs/lists'>Lists</NavLink></MenuItem>
            <MenuItem><NavLink to='/docs/tables'>Tables</NavLink></MenuItem>
            <MenuItem><NavLink to='/docs/buttons'>Buttons</NavLink></MenuItem>
            <MenuItem><NavLink to='/docs/form'>Forms</NavLink></MenuItem>
          </Menu>
        </Panel>
      </div>
    )
}

class Docs extends Component {
  render() {
    return (
            <LayoutWrapper
              sidebarComponent={<Sidebar />}
              sidebarWidth={260}
              sidebarBg="#FFFFFF"
              sidebarShadow={true}
              contentBg="#F9F9F9"
            >
              <Container left>
                <Route exact path={`${this.props.match.path}`} component={Start} />
                <Route path={`${this.props.match.path}/theme`} component={Theme} />
                <Route path={`${this.props.match.path}/typography`} component={Typography} />
                <Route path={`${this.props.match.path}/layout`} component={Layout} />
                <Route path={`${this.props.match.path}/grid`} component={Grid} />
                <Route path={`${this.props.match.path}/cards`} component={Cards} />
                <Route path={`${this.props.match.path}/charts`} component={Charts} />
                <Route path={`${this.props.match.path}/lists`} component={Lists} />
                <Route path={`${this.props.match.path}/tables`} component={Tables} />
                <Route path={`${this.props.match.path}/buttons`} component={Buttons} />
                <Route path={`${this.props.match.path}/form`} component={Form} />
              </Container>
            </LayoutWrapper>
    );
  }
}

export default Docs;
