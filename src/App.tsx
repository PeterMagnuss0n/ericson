import React from 'react';
import './App.css';
import DataFetch from './components/DataFetch';
import DataPost from './components/DataPost';
import Images from './components/Images';

function App() {
  return (
    <div className="Content">
      <div className="Grid">
        <div className="item-a">
          <DataFetch></DataFetch>
        </div>
        <div className="item-b">
          <DataPost></DataPost>
        </div>
        <div className="item-c">
          <Images></Images>
        </div>
      </div>
    </div>
  );
}

export default App;

