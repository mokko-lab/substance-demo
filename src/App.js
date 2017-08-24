import React, {Component} from 'react';
import {makeTheme, ThemeProvider, SideBar, Padded, MainPanel, NavLink as SideBarLink} from 'substance-ui';
import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';

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


const myTheme = makeTheme({


  colors: {
    primary: '#6DC6B6',
    secondary: '#7C39DA'
  },

  animations: {
    fast: '100ms',
  }

});


class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={myTheme}>
        <div>
          <SideBar>
            <Padded>
              <h1>Menu</h1>
            </Padded>

            <SideBarLink><NavLink to='/theme'><Map />Theme</NavLink></SideBarLink>
            <SideBarLink><NavLink to='/cards'><Square />Cards</NavLink></SideBarLink>
            <SideBarLink><NavLink to='/buttons'><Minus />Buttons</NavLink></SideBarLink>
            <SideBarLink><NavLink to='/charts'><AreaChart />Charts</NavLink></SideBarLink>
            <SideBarLink><NavLink to='/lists'><IoNavicon />Lists</NavLink></SideBarLink>
            <SideBarLink><NavLink to='/tables'><IoIosListOutline />Tables</NavLink></SideBarLink>
            <SideBarLink><NavLink to='/form'><IoIosListOutline />Forms</NavLink></SideBarLink>

          </SideBar>
          <MainPanel style={{background: '#F9F9F9', padding: '10px'}}>
              <Route path='/theme' component={Theme} />
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
