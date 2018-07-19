import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import AutoSuggest from './AutoSuggest';

class App extends Component {
  state = {
    pokemon: [ "hey", "hoy" ]
  }

  updateSuggestions (value) {
    // Use value to do a new query and generate new suggestions based on that.
    console.log("Test!");
  }

  getInfo() {
    // 1) Query all pokemon and show top 5 results. Also typeahead the number 1 result in the input field.
    // 2) For the current number 1 result query it's details. However, let's only do this request if the user stopped typing for 1 second (So we show some kind of loading while the user is typing).
  axios.get(`http://pokeapi.co/api/v2/pokemon`)
      .then(response => {
        const pokemon = response.data;
        this.setState({ pokemon });
      })
  }

  render() {
    return (
      <div className="App">
      <h1>Compare your favorite pokemon</h1>
      <Form>
      	<AutoSuggest suggestions={this.state.pokemon} onChangeInput={this.updateSuggestions} />
      </Form>
      </div>
    );
  }
}

export default App;
