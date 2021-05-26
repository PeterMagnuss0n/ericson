import React, { useState } from 'react';
import './App.css';
import DataFetch from './components/DataFetch';
import DataPost from './components/DataPost';
import Images from './components/Images';

function App() {

  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => setIsToggled(!isToggled);

  return (
    <div className="Content">
      <div className="Grid">
        <div className="item-a">
          <DataFetch showFetch={isToggled}></DataFetch>
        </div>
        <div className="item-b">
          <DataPost showFetch={toggle}></DataPost>
        </div>
        <div className="item-c">
          <Images></Images>
        </div>
      </div>
    </div>
  );
}

export default App;

