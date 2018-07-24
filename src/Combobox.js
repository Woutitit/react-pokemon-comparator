import React, { Component } from 'react';
import Autocomplete from './Autocomplete.js';

class Combobox extends Component {
  render() {
    return (
      <div>
        <Autocomplete suggestions={this.props.suggestions}></Autocomplete>
      </div>
    )
  }
}

export default Combobox;