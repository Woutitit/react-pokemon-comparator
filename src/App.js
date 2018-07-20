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

  updateSuggestions = () => {
    // 1) Fetch all pokemon names (And store locally?)
    // 2) Filter pokemon names based on input of the autocomplete component.
    // 3) Optional: Sort the filtered pokemon names on relevancy (the most relevant first in the array, the almost most relevant second, ...)
    // 4) Select the first 5 results and set it to the suggestions variable. The suggestions will then be updated.

    
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=949').then((response) => {
      const pokemon = response.data.results;
      console.log(pokemon);
      // Now, of this list we should check which pokemon names are relevant.
      // this.setState({suggestions: pokemon})
    })
  }

  render() {
    return (
      <div>
        <h1>Compare stats of Pokemon</h1>
        <Autocomplete suggestions={this.state.suggestions} onInputChange={this.updateSuggestions} />
      </div>
    )
  }
}

export default App;
