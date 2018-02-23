import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Loading from './loading';
import UserCollection from './user_collection';

class User extends Component {
	componentDidMount() {
		this.props.viewUserCollection();
		console.log(this.props);
	}

	render() {
		if (this.props.userCollection === undefined || null || '') {
			return (
				<div id="Search" className="container">
					<Loading />
				</div>
			);
		}
		return (
			<div id="UserCollection" className="container">
				<UserCollection userCollection={this.props.userCollection} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		userCollection: state.records.userCollection
	};
}

export default connect(mapStateToProps, actions)(User);
