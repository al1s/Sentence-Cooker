import React from 'react';
import preload from '../data.json';

const TopicList = () => (
  <div>
    {preload.topicList.map((topic, ndx) => <li key={ndx}>{topic}</li>)}
  </div>
);

export default TopicList;
