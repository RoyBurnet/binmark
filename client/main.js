import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Bins } from '../imports/collections/bins';
import './main.html';

import App from './components/app';
import BinsList from './components/bins/bins_list';
import BinsMain from './components/bins/bins_main';

const routes = (
  <BrowserRouter>
    <App />
    <Switch>
      <Route exact path="/bins" component={BinsList} />
      <Route exact path="/bins/:binId" component={BinsMain} />
    </Switch>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
