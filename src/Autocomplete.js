import React, { Component } from 'react';

class Autocomplete extends Component {
  render() {
    const listItems = this.props.suggestions.map((item) => { 
      // return <li key={item.url}>{item.name}</li> 
      return <li key={item}>{item}</li> 
    })

    return (
      <div>
        <input type="text" onChange={this.props.onInputChange} />
        <ul>{ listItems }</ul>
      </div>
    )
  }
}

export default Autocomplete;