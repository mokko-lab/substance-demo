import React, {Component} from 'react';
import { makeTheme, ThemeProvider, Padded, Panel } from 'substance-ui';
import { SideBar, MainPanel, SideBarLink } from 'substance-ui/lib/components/SideBar';

import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';

import Cards from './pages/Cards';
import Buttons from './pages/Buttons';
import Theme from './pages/Theme';
import Charts from './pages/Charts';
import Lists from './pages/Lists';
import Tables from './pages/Tables';
import Form from './pages/Form';

import theme from './theme';


const myTheme = makeTheme(theme);


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={myTheme}>
        <Router>
            <div>
              <SideBar shadow={true} activeBackground>
                <Panel alignment="center">
                  <Padded margin="40px 0px 30px 0px">
                    <img src={require('./images/logo.svg')} width="140" alt="" />
                  </Padded>
                </Panel>
                <SideBarLink><NavLink exact to='/'>Theme</NavLink></SideBarLink>
                <SideBarLink><NavLink to='/charts'>Charts</NavLink></SideBarLink>
                <SideBarLink><NavLink to='/cards'>Cards</NavLink></SideBarLink>
                <SideBarLink><NavLink to='/lists'>Lists</NavLink></SideBarLink>
                <SideBarLink><NavLink to='/tables'>Tables</NavLink></SideBarLink>
                <SideBarLink><NavLink to='/buttons'>Buttons</NavLink></SideBarLink>
                <SideBarLink><NavLink to='/form'>Forms</NavLink></SideBarLink>
              </SideBar>

              <MainPanel backgroundColor="#F9F9F9">
                  <Route exact path='/' component={Theme} />
                  <Route path='/cards' component={Cards} />
                  <Route path='/charts' component={Charts} />
                  <Route path='/lists' component={Lists} />
                  <Route path='/tables' component={Tables} />
                  <Route path='/buttons' component={Buttons} />
                  <Route path='/form' component={Form} />
              </MainPanel>

            </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
