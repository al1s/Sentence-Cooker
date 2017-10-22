import React from 'react';
import preload from '../data.json';

const TopicList = () => (
  <div className="list">
    {preload.topicList.map(topic => <li>{topic}</li>)}
  </div>
);

export default TopicList;
