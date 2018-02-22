import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AlbumList from './albumList';
import SearchForm from './search_form';
import Loading from './loading';

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
			<div id="Search" className="container">
				<UserAlbumList searchResults={this.props.searchResults} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		searchResults: state.records.searchResults
	};
}

export default connect(mapStateToProps, actions)(Search);
