import * as React from 'react';

import * as superagent from 'superagent';

export default class Header extends React.Component<{}, { heading: string }> {

	constructor(props: any) {
		super(props);
		this.state = { heading: 'Travel Information' };
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<h1 className="heading">
						{this.state.heading}
					</h1>
				</div>
				<h1 className="page-header">
					Express-React-Scaffholding
				</h1>
			</div>
		)
	}
}
