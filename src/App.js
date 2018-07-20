import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    suggestions: []
  }

  getSuggestions = () => {

  }

  updateSuggestions = () => {
    
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ this.updateSuggestions } />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      )
  }
}

export default App;
