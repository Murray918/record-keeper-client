import React, { Component } from 'react';

export default class SuccessMessage extends Component {
	render() {
		return (
			<div className="alert alert-success center">
				<strong>SUCCESS: </strong>
				{this.props.removedMessage}
			</div>
		);
	}
}
