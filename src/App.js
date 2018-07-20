import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    suggestions: ["apple", "banana", "orange"]
  }

  getSuggestions = () => {

  }

  updateSuggestions = () => {

  }

  render() {
    const listItems = this.state.suggestions.map((item) => { 
      return <li key={item}>{item}</li> 
    })

    return (
      <div>
        <input type="text" onChange={ this.updateSuggestions } />
        <ul>{ listItems }</ul>
      </div>
    )
  }
}

export default App;
