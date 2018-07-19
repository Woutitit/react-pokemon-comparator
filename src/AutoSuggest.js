import React, { Component } from 'react';

class AutoSuggest extends React.Component {
	render() {
		return (
			<div>
				<input type="text" onChange={(evt) => { this.props.onChangeInput(evt.target.value); }} />
				<div>
					{this.props.suggestions}
				</div>
			</div>
		)
	}
}

export default AutoSuggest;