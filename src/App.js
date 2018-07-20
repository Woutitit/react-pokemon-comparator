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

  updateSuggestions = (value) => {
    // 1) Fetch all pokemon names (And store locally?)
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=949').then((response) => {
      var pokemon = response.data.results;

      // 2) Filter pokemon names based on input of the autocomplete component.
      // Note: We do not need to sort anything.
      pokemon = pokemon.filter(pokemon => new RegExp('^' + value, 'i').test(pokemon.name));

      // 4) Select the first 5 results (or whatever specified) and set it to the suggestions variable. The suggestions will then be updated.

    })
  }

  render() {
    return (
      <div>
        <h1>Compare stats of Pokemon</h1>
        <Autocomplete suggestions={this.state.suggestions} onChangeInput={this.updateSuggestions} />
      </div>
    )
  }
}

export default App;
