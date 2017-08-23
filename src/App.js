import React, {Component} from 'react';
import {SideBar, Padded, MainPanel, NavLink as SideBarLink} from 'substance-ui';
import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';

import Minus from 'react-icons/lib/fa/minus';
import Square from 'react-icons/lib/fa/square-o';
import Map from 'react-icons/lib/fa/map-o';
import AreaChart from 'react-icons/lib/fa/area-chart';
import ListIcon from 'react-icons/lib/fa/list';

import Cards from './pages/Cards';
import Buttons from './pages/Buttons';
import Theme from './pages/Theme';
import Charts from './pages/Charts';
import List from './pages/List';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <SideBar>
          <Padded>
            <h1>Menu</h1>
          </Padded>

          <SideBarLink><NavLink to='/theme'><Map />Theme</NavLink></SideBarLink>
          <SideBarLink><NavLink to='/cards'><Square />Cards</NavLink></SideBarLink>
          <SideBarLink><NavLink to='/buttons'><Minus />Buttons</NavLink></SideBarLink>
          <SideBarLink><NavLink to='/charts'><AreaChart />Charts</NavLink></SideBarLink>
          <SideBarLink><NavLink to='/list'><ListIcon />List</NavLink></SideBarLink>

        </SideBar>
        <MainPanel style={{background: '#F9F9F9', padding: '10px'}}>
            <Route path='/theme' component={Theme} />
            <Route path='/cards' component={Cards} />
            <Route path='/buttons' component={Buttons} />
            <Route path='/charts' component={Charts} />
            <Route path='/list' component={List} />

        </MainPanel>
        </div>
      </Router>
    );
  }
}

export default App;
