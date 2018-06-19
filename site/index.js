import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Router, Route, hashHistory} from 'react-router';
import 'core-js';

import 'element-theme-default';

import './styles/base.scss';
import './styles/prism.css';

import App from './page';
import Home from './home';
import Spec from './spec';

render(<AppContainer>
  <Router history={hashHistory}>
    <Route path="/home" component={Home}/>
    <Route path="/spec" component={Spec}/>
    <Route path="*" component={App}/>
  </Router>
</AppContainer>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./page', () => {
    const App = require('./page').default;
    render(<AppContainer>
      <Router history={hashHistory}>
        <Route path="/home" component={Home}/>
        <Route path="/spec" component={Spec}/>
        <Route path="*" component={App}/>
      </Router>
    </AppContainer>, document.getElementById('app'));
  });
}
