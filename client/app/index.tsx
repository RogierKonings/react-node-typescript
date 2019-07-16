
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AppRouter from './layouts/App.Router';
import './index.html';

import './style.css';

ReactDOM.render(
	<AppRouter />,
	document.getElementById('root')
);

// for hot reloading this router component.
if (module.hot) {

	module.hot.accept('./layouts/App.Router.tsx', () => {
		const AppRouter = require('./layouts/App.Router.tsx').default;
		console.log('>>>>>> Router Updated !! <<<<<<<')
		ReactDOM.render(
			<AppRouter />,
			document.getElementById('root')


		);
	});
}