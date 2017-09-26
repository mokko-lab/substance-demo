import React, {Component} from 'react';
import {makeTheme, ThemeProvider, SideBar, Padded, Panel, MainPanel, NavLink as SideBarLink} from 'substance-ui';
import {NavLink, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Minus from 'react-icons/lib/fa/minus';
import Square from 'react-icons/lib/fa/square-o';
import Map from 'react-icons/lib/fa/map-o';
import AreaChart from 'react-icons/lib/fa/area-chart';

import {IoIosListOutline, IoNavicon} from 'react-icons/lib/io';

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
      <Router>
        <ThemeProvider theme={myTheme}>
          <div>

            <SideBar shadow={true} activeBackground>
              <Panel justifyContent="center">
                <Padded margin="40px 0px 30px 0px">
                  <img src={require('./images/logo.svg')} width="140" />
                </Padded>
              </Panel>
              <SideBarLink><NavLink exact to='/'><Map />Theme</NavLink></SideBarLink>
              <SideBarLink><NavLink to='/cards'><Square />Cards</NavLink></SideBarLink>
              <SideBarLink><NavLink to='/buttons'><Minus />Buttons</NavLink></SideBarLink>
              <SideBarLink><NavLink to='/charts'><AreaChart />Charts</NavLink></SideBarLink>
              <SideBarLink><NavLink to='/lists'><IoNavicon />Lists</NavLink></SideBarLink>
              <SideBarLink><NavLink to='/tables'><IoIosListOutline />Tables</NavLink></SideBarLink>
              <SideBarLink><NavLink to='/form'><IoIosListOutline />Forms</NavLink></SideBarLink>
            </SideBar>

            <MainPanel backgroundColor="#F9F9F9">
                <Route exact path='/' component={Theme} />
                <Route path='/cards' component={Cards} />
                <Route path='/buttons' component={Buttons} />
                <Route path='/charts' component={Charts} />
                <Route path='/lists' component={Lists} />
                <Route path='/tables' component={Tables} />
                <Route path='/form' component={Form} />
            </MainPanel>

          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
