import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/App.layout';
import Stations from './components/Body/Stations/Stations.component';

const AppRouter = (): JSX.Element => (
  <BrowserRouter>
    <Route path="/" component={AppLayout} />
    <Route path="/stations" component={Stations} />
  </BrowserRouter>
);

export default AppRouter;
