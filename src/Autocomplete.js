import 'bootstrap3/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap3/dist/js/bootstrap.min.js';
import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class Autocomplete extends Component {
  render() {
    const listItems = this.props.suggestions.map((item) => { 
      // return <li key={item.url}>{item.name}</li> 
      return <li key={item.name}>{item.name}</li> 
    })

    return (
      <div>
        <FormControl type="text" onChange={(evt) => { this.props.onChangeInput(evt.target.value); }} />
        <ul>{ listItems }</ul>
      </div>
    )
  }
}

export default Autocomplete;