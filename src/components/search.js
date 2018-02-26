import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AlbumList from './albumList';
import SearchForm from './search_form';
import Loading from './loading';

class Search extends Component {
	// componentWillMount() {
	// 	if (this.props.removedMessage) {
	// 		this.props.removedMessage = null;
	// 	}
	// }

	handleSubmit({ value, query }) {
		console.log('this is the type: ', value, ' and this is the query :', query);
		this.props.search({ value, query });
	}

	render() {
		if (this.props.searchResults === undefined || null || '') {
			return (
				<div id="Search" className="container">
					<SearchForm onSubmit={this.handleSubmit.bind(this)} />
					<Loading />
				</div>
			);
		}
		return (
			<div id="Search" className="container">
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
