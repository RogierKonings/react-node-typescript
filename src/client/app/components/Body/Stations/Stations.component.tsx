import * as React from 'react';
import { useState, useEffect } from 'react';
import { Station } from '../../../../../models/station.model';
import { Endpoints } from '../../../../../configuration/endpoints';

export default function Stations(): JSX.Element {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch(`${Endpoints.TravelInformation.Stations}`)
      .then(response => response.json())
      .then((response: Array<Station>) => setStations(response));
  }, []);

  return (
    <ul>
      {stations.map((station: Station) => (
        <li key={station.UICCode}>
          <span>{station.namen.lang}</span>
        </li>
      ))}
    </ul>
  );
}
