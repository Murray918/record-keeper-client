import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SuccessMessage from './success_message';
import ReactDOM from 'react-dom';

class UserCollection extends Component {
	renderRemovedMessage(target) {
		//here we must put our success_message in the correct react element
		let targetCard = 'user-record :' + target.target.id;
		let mountPoint = document.createElement('div');
		console.log(targetCard);
		document.getElementById(targetCard).appendChild(mountPoint);
		ReactDOM.render(
			<SuccessMessage removedMessage={this.props.removedMessage} />,
			mountPoint
		);
	}

	handleRemoveRecord(targetRecord) {
		let record = this.props.userCollection[targetRecord.target.id];
		this.props.removeRecord(record);
		this.renderRemovedMessage(targetRecord);
	}

	render() {
		const collection = this.props.userCollection.map((record, key) => {
			let cardId = 'user-record :' + key;
			return (
				<div
					key={key}
					id={cardId}
					className="album-container columns five u-max-full-">
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
						className="columns u-full-width center">
						remove
					</button>
				</div>
			);
		});
		return (
			<div className="container">
				<div className="center u-full-width" id="UserList">
					<hr className="u-full-width" />
					{collection}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		removedMessage: state.records.removedMessage
	};
}

export default connect(mapStateToProps, actions)(UserCollection);
