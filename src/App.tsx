import React from 'react';
import './App.css';
import DataFetch from './components/DataFetch';
import DataPost from './components/DataPost';

function App() {
  return (
    <div className="App">
        <DataFetch></DataFetch>
        <DataPost></DataPost>
    </div>
  );
}

export default App;

