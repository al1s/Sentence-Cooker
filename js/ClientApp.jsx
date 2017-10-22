import React from 'react';
import { render } from 'react-dom';
import SideBar from './SideBar';
import CardsWrapper from './CardsWrapper';
import UInput from './UInput';

const App = () => (
  <div className="main">
    <SideBar />
    <CardsWrapper />
    <UInput />
  </div>
);

render(<App />, document.getElementById('app'));
