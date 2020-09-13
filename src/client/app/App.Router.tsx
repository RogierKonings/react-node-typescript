import * as React from 'react';
import { Router, Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppLayout from './layouts/App.layout';

import Stations from './components/Body/Stations/Stations.component';

const AppRouter = (): JSX.Element => (
  <BrowserRouter>
    <Route path="/" component={AppLayout} />
    <Route path="/stations" component={Stations} />
  </BrowserRouter>
);

export default AppRouter;
