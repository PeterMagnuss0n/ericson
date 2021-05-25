import React from 'react';
import './App.css';
import DataFetch from './components/DataFetch';
import DataPost from './components/DataPost';
import Images from './components/Images';

function App() {
  return (
    <div className="App">
        <DataFetch></DataFetch>
        <DataPost></DataPost>
        <Images></Images>
    </div>
  );
}

export default App;

