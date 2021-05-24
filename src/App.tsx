import React from 'react';
import './App.css';
import DataFetch from './components/DataFetch';
import DataPost from './components/DataPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataFetch></DataFetch>
        <DataPost></DataPost>
      </header>
    </div>
  );
}

export default App;

