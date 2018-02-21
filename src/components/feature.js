import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AlbumList from './albumList';
import Search from './search';
import Loading from './loading';

class Feature extends Component {
	componentDidMount() {
		console.log(this.props);
		// this.props.fetchData();
	}

	handleSubmit({ value, query }) {
		console.log('this is the type: ', value, ' and this is the query :', query);
		this.props.search({ value, query });
	}

	render() {
		if (this.props.searchResults === undefined || null || '') {
			return (
				<div id="Feature" className="container">
					<Search onSubmit={this.handleSubmit.bind(this)} />
					<Loading />
				</div>
			);
		}
		return (
			<div id="Feature" className="container">
				<Search onSubmit={this.handleSubmit.bind(this)} />
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

export default connect(mapStateToProps, actions)(Feature);
