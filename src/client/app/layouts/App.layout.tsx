import * as React from 'react';
import { useState } from 'react';

import { Provider } from 'react-redux';
import configureStore from '../config/store.config';

import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';

export default function AppLayout(props: React.PropsWithChildren<any>): JSX.Element {
  return (
    <Provider store={configureStore({ initialState: {} })}>
      <div id="app-container" className="container-fluid">
        <Header />
        {props.children}
        <Footer />
      </div>
    </Provider>
  );
}
