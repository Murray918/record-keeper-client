import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AlbumList from './albumList';
import SearchForm from './search_form';
import Loading from './loading';

class Search extends Component {
	// TODO create some kind of initial state that the component can revert to upon unmounting

	handleSubmit({ value, query }) {
		this.props.search({ value, query });
	}

	render() {
		if (this.props.searchResults === undefined || null || '') {
			return (
				<div id="Search">
					<SearchForm onSubmit={this.handleSubmit.bind(this)} />
					<Loading />
				</div>
			);
		}
		return (
			<div id="Search">
				<SearchForm onSubmit={this.handleSubmit.bind(this)} />
				<AlbumList searchResults={this.props.searchResults} />
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
