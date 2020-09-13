import * as React from 'react';
import { useState } from 'react';

import * as superagent from 'superagent';

export default function Header(): JSX.Element {
  const [heading, setHeading] = useState('Travel Information');

  return (
    <div className="container">
      <div className="row">
        <h1 className="heading">{heading}</h1>
      </div>
      <h1 className="page-header">Transportation Station</h1>
    </div>
  );
}
