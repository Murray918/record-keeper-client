import React, { Component } from 'react';

export default class SuccessMessage extends Component {
	render() {
		return (
			<div className="alert alert-success u-full-width">
				<strong> SUCCESS: </strong>
				<h6>record removed</h6>
			</div>
		);
	}
}
