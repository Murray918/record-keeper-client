import React, { Component } from "react";
//something is going wrong here
//TODO: figure out why we are getting an error here
export default class SuccessMessage extends Component {
	componentWillMount() {
		console.log(this.props);
	}
	render() {
		if (this.props.recordMessage.record) {
			console.log(this.props.recordMessage);
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
