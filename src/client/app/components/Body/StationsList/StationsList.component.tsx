import * as React from 'react';
import { useState, useEffect } from 'react';
import { Station } from '../../../../../models/station.model';
import { Endpoints } from '../../../../../configuration/endpoints';

export default function StationsList({ stations }: { stations: Array<Station> }): JSX.Element {
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
