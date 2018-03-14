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
				<AlbumList
					searchResults={this.props.searchResults}
					recordMessage={this.props.recordMessage}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		searchResults: state.records.searchResults,
		recordMessage: state.records.recordMessage
	};
}

export default connect(mapStateToProps, actions)(Search);
