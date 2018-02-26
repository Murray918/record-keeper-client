import React, { Component } from 'react';

export default class SuccessMessage extends Component {
	componentWillReceiveProps(nextProps) {
		this.props.removedMessage = nextProps;
	}
	render() {
		return (
			<div className="alert alert-success u-full-width">
				<strong> SUCCESS: </strong>
				{this.props.removedMessage}
			</div>
		);
	}
}
