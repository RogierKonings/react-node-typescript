import * as React from 'react';
import { useState, useEffect } from 'react';
import { Station } from '../../../../../models/station.model';
import { Endpoints } from '../../../../../configuration/endpoints';
import StationsList from '../StationsList/StationsList.component';

export default function StationContainer(): JSX.Element {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch(`${Endpoints.TravelInformation.Stations}`)
      .then(response => response.json())
      .then((response: Array<Station>) => setStations(response));
  }, []);

  return <StationsList stations={stations} />;
}
