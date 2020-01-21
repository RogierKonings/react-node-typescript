import * as React from 'react';

import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="btn-group">
					<Link to="/stations">
						<button className="btn btn-default btn-sm">Stations</button>
					</Link>
				</div>
			</div>
		);
	}
}