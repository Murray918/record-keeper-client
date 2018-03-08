import React, { Component } from 'react';

export default class SuccessMessage extends Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		if (this.props.removeMessage === null) {
			return (
				<div className="alert alert-success u-full-width">
					<strong> SUCCESS: </strong>
					<h6>Record Added</h6>
				</div>
			);
		}
		return (
			<div className="alert alert-success u-full-width">
				<strong> SUCCESS: </strong>
				{this.props.removedMessage}
			</div>
		);
	}
}
