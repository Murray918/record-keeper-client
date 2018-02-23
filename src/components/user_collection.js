import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserCollection extends Component {
	componentDidMount() {
		console.log(
			'this is in side our collection where the map goes:',
			this.props
		);
	}

	handleAddRecord(targetRecord) {
		let record = this.props.searchResults[targetRecord.target.id];
		this.props.remocveRecord(record);
		console.log('clicked');
	}

	render() {
		const collection = this.props.userCollection.map((record, key) => {
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

export default connect(null, actions)(UserCollection);
