import React from 'react';
import { render } from 'react-dom';
import SideBar from './SideBar';
import CardsWrapper from './CardsWrapper';
import TopicList from './TopicList';

const App = () => (
  <div className="main">
    <SideBar>
      <TopicList />
    </SideBar>
    <CardsWrapper />
    <UInput />
  </div>
);

render(<App />, document.getElementById('app'));
