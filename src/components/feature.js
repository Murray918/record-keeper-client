import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

class Feature extends Component {
	componentWillMount() {
		this.props.fetchMessage();
	}

	render() {
		return (
			<div>
				this is our secure message
				<p>{this.props.message}</p>
				<p>
					<Link to={'/signin'}>/signin</Link>
				</p>{' '}
				<p>
					<Link to={'/signup'}>/signup</Link>
				</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		message: state.auth.message
	};
}

export default connect(mapStateToProps, actions)(Feature);
