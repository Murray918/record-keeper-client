import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

class Feature extends Component {
	componentWillMount() {
		this.props.fetchMessage();
	}

	render() {
		console.log(this.props.message);
		// const data = this.props.message.map((album, key) => {
		// 	return (
		// 		<div>
		// 			<p>{album.artist}</p>
		// 			<p>{album.title}</p>
		// 			<p>{album.id}</p>
		// 		</div>
		// 	);
		// });

		return (
			<div id="Feature" className="container">
				this is our secure message
				<div>shoot</div>
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
