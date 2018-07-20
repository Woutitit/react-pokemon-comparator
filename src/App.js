import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Autocomplete from './Autocomplete.js';

class App extends Component {
  // Obviously we should also supply so OUTSIDE the autosuggest component we should filter the list that should be supplied and shown by our autosuggest component.
  state = {
    suggestions: ["apple", "banana", "orange"]
  }

  getSuggestions = () => {

  }

  updateSuggestions = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=949').then((response) => {
      const pokemon = response.data.results;
      console.log(pokemon);
      // Now, of this list we should check which pokemon names are relevant.
      this.setState({suggestions: pokemon})
    })
  }

  render() {
    return (
      <div>
        <h1>Compare stats of Pokemon</h1>
        <Autocomplete suggestions={this.state.suggestions} />
      </div>
    )
  }
}

export default App;
