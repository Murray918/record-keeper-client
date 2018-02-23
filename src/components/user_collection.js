import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserCollection extends Component {
	componentWillMount() {
		if (this.props.removedMessage) {
			this.props.removedMessage = null;
		}
	}

	renderRemoveMessage() {
		if (this.props.removedMessage) {
			return (
				<div className="alert alert-success center">
					<strong>SUCCESS: </strong>
					{this.props.removedMessage}
				</div>
			);
		}
	}

	handleRemoveRecord(targetRecord) {
		let record = this.props.userCollection[targetRecord.target.id];
		this.props.removeRecord(record);
		console.log('clicked');
		// targetRecord.target renderRmoveMessage
	}

	render() {
		const collection = this.props.userCollection.map((record, key) => {
			console.log(record);
			return (
				<div key={key} className=" columns five u-max-full-">
					<h4 className="text-center">{record.artist}</h4>
					<h6>{record.title}</h6>
					<img
						className="u-max-full"
						alt="album artwok here"
						src={record.imageMedium}
					/>
					<button
						id={key}
						onClick={this.handleRemoveRecord.bind(this)}
						type="click"
						className="u-pull-right">
						remove
					</button>
				</div>
			);
		});
		return <div className="record-container row center">{collection}</div>;
	}
}

function mapStateToProps(state) {
	removedMessage: state.records.removedMessage;
}

export default connect(mapStateToProps, actions)(UserCollection);
