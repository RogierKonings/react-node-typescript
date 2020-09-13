import * as React from 'react';
import { useState } from 'react';

export default function Header(): JSX.Element {
  const [heading] = useState('Travel Information');

  return (
    <div className="container">
      <div className="row">
        <h1 className="heading">{heading}</h1>
      </div>
      <h1 className="page-header">Transportation Station</h1>
    </div>
  );
}
