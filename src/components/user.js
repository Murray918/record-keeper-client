import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Loading from './loading';
import UserCollection from './user_collection';

class User extends Component {
	componentDidMount() {
		this.props.viewUserCollection();
	}

	render() {
		if (this.props.userCollection === undefined || null || '') {
			return (
				<div id="Search">
					<Loading />
				</div>
			);
		}
		return (
			<div id="UserCollection" className="container">
				<UserCollection
					userCollection={this.props.userCollection}
					recordMessage={this.props.recordMessage}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		userCollection: state.records.userCollection,
		recordMessage: state.records.recordMessage
	};
}

export default connect(mapStateToProps, actions)(User);
