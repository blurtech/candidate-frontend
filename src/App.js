import React, { Component } from 'react';
import AppHeader from './AppHeader.js';
import PollList from './PollList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <PollList />
      </div>
    );
  }
}

export default App;
