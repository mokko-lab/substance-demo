import React, {Component} from 'react';
import {SideBar, Padded, MainPanel, NavLink as SideBarLink} from 'substance-ui';
import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';

import Minus from 'react-icons/lib/fa/minus';
import Square from 'react-icons/lib/fa/square-o';

import Cards from './pages/Cards';
import Buttons from './pages/Buttons';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <SideBar>
          <Padded>
            <h1>Menu</h1>
          </Padded>

          <SideBarLink><NavLink to='/cards'><Square /><span className="hidden-sm">Cards</span></NavLink></SideBarLink>
          <SideBarLink><NavLink to='/buttons'><Minus /><span className="hidden-sm">Buttons</span></NavLink></SideBarLink>

        </SideBar>
        <MainPanel>
          <div style={{
            background: '#F9F9F9',
          }}>

            <Route path='/cards' component={Cards} />

            <Route path='/buttons' component={Buttons} />


          </div>
        </MainPanel>
        </div>
      </Router>
    );
  }
}

export default App;
