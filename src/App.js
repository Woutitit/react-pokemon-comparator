import 'bootstrap3/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap3/dist/js/bootstrap.min.js';
import React, { Component } from 'react';
import { Grid, Table } from 'react-bootstrap';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Combobox from './Combobox.js';

class App extends Component {
  // Obviously we should also supply so OUTSIDE the autosuggest component we should filter the list that should be supplied and shown by our autosuggest component.
  state = {
    suggestions: []
  }

  updateSuggestions = (value) => {
    // 1) Fetch all pokemon names (And store locally?)
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=949').then((response) => {
      var pokemon = response.data.results;

      // 2) Filter pokemon names based on input of the autocomplete component. Note: We do not need to sort anything.
      pokemon = pokemon.filter(pokemon => new RegExp('^' + value, 'i').test(pokemon.name));

      // 3) Select the first 5 results (or whatever specified) and set it to the suggestions variable. The suggestions will then be updated.
      this.setState({suggestions: pokemon});
    })
  }

  render() {
    return (
      <Grid>
        <h1>Compare stats of Pokemon</h1>
        <p>Select up to 5 Pokémon to compare.</p>
          <Combobox suggestions={this.state.suggestions}></Combobox>
      </Grid>
    )
  }
}

export default App;
