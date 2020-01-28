import * as React from 'react';

import { Station } from '../../../../../models/station.model';

import { Endpoints } from '../../../../../configuration/endpoints';

type MyProps = {};
type MyState = { stations: Array<Station> };

export default class Stations extends React.Component<MyProps, MyState> {
    
    constructor(props: MyProps) {
        super(props);
        this.state = {
            stations: []
        };
    }

    componentDidMount() {
        event.preventDefault();
        fetch(`${Endpoints.TravelInformation.Stations}`)
            .then(response => response.json())
            .then((stations: Array<Station>) => this.setState({ stations: stations}));
    }

	render() {
        const { stations } = this.state;
		return (
			<ul>
                {stations.map((station: Station) => 
                    <li key={station.UICCode}>.
                        <span>{station.namen.lang}</span>
                    </li>    
                )}
            </ul>
		);
	}

}