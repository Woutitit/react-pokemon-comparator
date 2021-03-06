import React, { Component } from 'react';
import { FormControl, Panel } from 'react-bootstrap';

class Autocomplete extends Component {
  render() {
    const listItems = this.props.suggestions.map((item) => { 
      // return <li key={item.url}>{item.name}</li> 
      return <li key={item.name}>{item.name}</li> 
    })

    return (
      <div>
        <FormControl type="text" onChange={(evt) => { this.props.onChangeInput(evt.target.value); }} />
          <ul>
            { listItems }
          </ul>
      </div>
    )
  }
}

export default Autocomplete;