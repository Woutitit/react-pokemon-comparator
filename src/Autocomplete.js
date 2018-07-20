import React, { Component } from 'react';

class Autocomplete extends Component {
  render() {
    const listItems = this.props.suggestions.map((item) => { 
      // return <li key={item.url}>{item.name}</li> 
      return <li key={item.name}>{item.name}</li> 
    })

    return (
      <div>
        <input type="text" onChange={(evt) => { this.props.onChangeInput(evt.target.value); }} />
        <ul>{ listItems }</ul>
      </div>
    )
  }
}

export default Autocomplete;