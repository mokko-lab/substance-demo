import React, {Component} from 'react';
import { NavLink, Router, Route, BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import { Heading, Menu, MenuItem, Panel, Container, LayoutWrapper } from 'substance-ui';

import Home from './pages/Home';
import Docs from './pages/Docs';


// import theme from './theme';

// const myTheme = makeTheme(theme);
// Usage: Wrap app component with <ThemeProvider theme={< YOUR THEME JSON >} />


const customHistory = createBrowserHistory()


class AppHeader extends Component {
  render() {
    return (
        <BrowserRouter history={customHistory} basename={process.env.PUBLIC_URL+'/'}>
              <div>
                  <Route exact path='/' component={Home} />
                  <Route path='/docs' component={Docs} />
              </div>
        </BrowserRouter>
    );
  }
}

export default AppHeader;
