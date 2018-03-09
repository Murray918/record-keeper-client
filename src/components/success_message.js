import React, { Component } from 'react';

export default class SuccessMessage extends Component {
	componentWillMount() {
		console.log(this.props);
	}
	render() {
		if (this.props.recordMessage.record) {
			return (
				<div className="u-full-width">
					<strong> SUCCESS: </strong>
					{this.props.recordMessage.Success}
				</div>
			);
		}
		return (
			<div className="u-full-width">
				<strong> SUCCESS: </strong>
				{this.props.recordMessage}
			</div>
		);
	}
}
