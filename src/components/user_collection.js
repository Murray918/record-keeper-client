import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SuccessMessage from './success_message';
import ReactDOM from 'react-dom';
import { mapValues } from 'lodash';

class UserCollection extends Component {
	state = {
		recordMessage: null
	};
	componentDidUpdate() {
		// let children = document.getElementById('UserList').children;
		// mapValues(children, child => {
		// 	if (child.lastElementChild.disabled === true) {
		// 		child.lastElementChild.disabled = false;
		// 		console.log(child.lastElementChild);
		// 	}
		// });
		console.log('PARTY');
	}

	renderRemovedMessage(target) {
		target.target.disabled = true;
		let targetCard = 'user-record :' + target.target.id;
		let mountPoint = document.createElement('div');
		document.getElementById(targetCard).appendChild(mountPoint);
		ReactDOM.render(
			<SuccessMessage removedMessage={this.state.recordMessage} />,
			mountPoint
		);
		setTimeout(function() {
			document.getElementById(targetCard).remove();
		}, 8000);
	}

	handleRemoveRecord(targetRecord) {
		let record = this.props.userCollection[targetRecord.target.id];
		this.props.removeRecord(record);
		//++++++++++++++++++++++++++++++++++++++
		if (this.props.recordMessage !== null) {
			this.setState({
				removedMessage: this.props.recordMessage
			});
			console.log(this.state.recordMessage);
			this.renderRemovedMessage(targetRecord);
		}
	}

	render() {
		const collection = this.props.userCollection.map((record, key) => {
			let cardId = 'user-record :' + key;
			return (
				<div key={key} id={cardId} className="album-container">
					<h4 className="text-center">{record.artist}</h4>
					<h6>{record.title}</h6>
					<img className="" alt="album artwok here" src={record.imageMedium} />
					<button
						id={key}
						onClick={this.handleRemoveRecord.bind(this)}
						type="click"
						className="button-primary:focus form-button">
						REMOVE
					</button>
				</div>
			);
		});
		return (
			<div>
				<hr className="u-max-width" />
				<div className="list-wrapper" id="UserList">
					{collection}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		removedMessage: state.records.recordMessage
	};
}

export default connect(mapStateToProps, actions)(UserCollection);
