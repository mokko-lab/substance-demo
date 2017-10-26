import React, {Component} from 'react';
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';

import { makeTheme, ThemeProvider, Padded, Panel } from 'substance-ui';
import { SideBar, LayoutWrapper, SideBarLink } from 'substance-ui/lib/components/Layouts';
import Container from './components/container';

import Start from './pages/Start';
import Cards from './pages/Cards';
import Buttons from './pages/Buttons';
import Theme from './pages/Theme';
import Charts from './pages/Charts';
import Lists from './pages/Lists';
import Tables from './pages/Tables';
import Form from './pages/Form';

import theme from './theme';

// const myTheme = makeTheme(theme);
// Usage: Wrap app component with <ThemeProvider theme={< YOUR THEME JSON >} />


const Sidebar = () => {
    return (
      <div>
        <Panel alignment="center">
          <Padded top={4} bottom={4}>
            <img src={require('./images/logo.svg')} width="140" alt="" />
          </Padded>
        </Panel>
        <SideBarLink><NavLink exact to='/'>Getting Started</NavLink></SideBarLink>
        <SideBarLink><NavLink exact to='/theme'>Theme</NavLink></SideBarLink>
        <SideBarLink><NavLink to='/charts'>Charts</NavLink></SideBarLink>
        <SideBarLink><NavLink to='/cards'>Cards</NavLink></SideBarLink>
        <SideBarLink><NavLink to='/lists'>Lists</NavLink></SideBarLink>
        <SideBarLink><NavLink to='/tables'>Tables</NavLink></SideBarLink>
        <SideBarLink><NavLink to='/buttons'>Buttons</NavLink></SideBarLink>
        <SideBarLink><NavLink to='/form'>Forms</NavLink></SideBarLink>
      </div>
    )
}


class App extends Component {
  render() {
    return (
        <Router>
            <LayoutWrapper
              sidebarComponent={<Sidebar />}
              sidebarWidth={260}
              sidebarBg="#FFFFFF"
              sidebarShadow={true}
              contentBg="#F9F9F9"
              //fluid={true}
            >
              <Route exact path='/' component={Start} />
              <Route exact path='/theme' component={Theme} />
              <Route path='/cards' component={Cards} />
              <Route path='/charts' component={Charts} />
              <Route path='/lists' component={Lists} />
              <Route path='/tables' component={Tables} />
              <Route path='/buttons' component={Buttons} />
              <Route path='/form' component={Form} />
            </LayoutWrapper>
        </Router>
    );
  }
}

export default App;
