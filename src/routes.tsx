import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Exchange from './pages/Exchange';
import Transaction from './pages/Transaction';
import Search from './pages/Search';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Exchange} path="/trocar/:amount/:from/:to" />
      <Route component={Transaction} path="/transacao/:id" />
      <Route component={Search} path="/search/:id?" />
      <Route component={() => <Redirect to="/" />} path="*" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
