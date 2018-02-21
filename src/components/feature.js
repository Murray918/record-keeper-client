import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import AlbumList from './albumList';
import Search from './search';
import Loading from './loading';

class Feature extends Component {
	componentDidMount() {
		this.props.fetchData();
	}

	render() {
		if (this.props.message === undefined || null || '') {
			return (
				<div id="Feature" className="container">
					<Search />
					<Loading />
				</div>
			);
		}
		return (
			<div id="Feature" className="container">
				<Search />
				<AlbumList message={this.props.message} />
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
