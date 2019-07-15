import * as React from 'react';
import { Router, Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppLayout from './App.layout';

import NodeJS from '../components/Body/Nodejs.component';
import ExpressJS from '../components/Body/Expressjs.component';
import ReactJS from '../components/Body/Reactjs.component';
import MongoDB from '../components/Body/Mongodb.component';

const AppRouter = () => (
	<Router history={createBrowserHistory()}>
		<Route path="/" component={AppLayout} >
			<Route component={NodeJS} />
			<Route path="express" component={ExpressJS} />
			<Route path="mongo" component={MongoDB} />
			<Route path="react" component={ReactJS} />
		</Route>
	</Router>
);

export default AppRouter;