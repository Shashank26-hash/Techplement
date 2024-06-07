
import React from 'react';
import Quote from './components/Quote';
import Heading from './components/Heading';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Heading className = "heading"/>
        <Quote className = "Quote"/>
      </header>
    </div>
  );
};

export default App;
