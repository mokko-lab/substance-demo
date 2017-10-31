import React, {Component} from 'react';
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';

import { Panel, Container, LayoutWrapper } from 'substance-ui/lib/components/Layouts';
import { Menu, MenuItem } from 'substance-ui/lib/components/Menu';

import Start from './pages/Start';
import Theme from './pages/Theme';
import Typography from './pages/Typography';
import Layout from './pages/Layout';
import Cards from './pages/Cards';
import Buttons from './pages/Buttons';
import Charts from './pages/Charts';
import Lists from './pages/Lists';
import Tables from './pages/Tables';
import Form from './pages/Form';

// import theme from './theme';

// const myTheme = makeTheme(theme);
// Usage: Wrap app component with <ThemeProvider theme={< YOUR THEME JSON >} />


const Sidebar = () => {
    return (
      <div>
        <Panel alignment="center" paddingTop={40} paddingBottom={50}>
            <img src={require('./images/logo.svg')} width="140" alt="" />
        </Panel>
        <Panel paddingLeft={40}>
          <Menu layout="vertical" itemColor="#313131" itemSpacing={30} activeFontSize={18} activeColor="black">
            <MenuItem><NavLink exact to='/'>Getting Started</NavLink></MenuItem>
            <MenuItem><NavLink exact to='/theme'>Theme</NavLink></MenuItem>
            <MenuItem><NavLink exact to='/typography'>Typography</NavLink></MenuItem>
            <MenuItem><NavLink exact to='/layout'>Layout</NavLink></MenuItem>
            <MenuItem><NavLink to='/charts'>Charts</NavLink></MenuItem>
            <MenuItem><NavLink to='/cards'>Cards</NavLink></MenuItem>
            <MenuItem><NavLink to='/lists'>Lists</NavLink></MenuItem>
            <MenuItem><NavLink to='/tables'>Tables</NavLink></MenuItem>
            <MenuItem><NavLink to='/buttons'>Buttons</NavLink></MenuItem>
            <MenuItem><NavLink to='/form'>Forms</NavLink></MenuItem>
          </Menu>
        </Panel>
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
            >
              <Container>
                <Route exact path='/' component={Start} />
                <Route exact path='/theme' component={Theme} />
                <Route exact path='/typography' component={Typography} />
                <Route exact path='/layout' component={Layout} />
                <Route path='/cards' component={Cards} />
                <Route path='/charts' component={Charts} />
                <Route path='/lists' component={Lists} />
                <Route path='/tables' component={Tables} />
                <Route path='/buttons' component={Buttons} />
                <Route path='/form' component={Form} />
              </Container>

            </LayoutWrapper>
        </Router>
    );
  }
}

export default App;
