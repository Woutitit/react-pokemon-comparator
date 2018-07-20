import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Obviously we should also supply so OUTSIDE the autosuggest component we should filter the list that should be supplied and shown by our autosuggest component.
  state = {
    suggestions: []
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
    const listItems = this.state.suggestions.map((item) => { 
      return <li key={item.url}>{item.name}</li> 
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
