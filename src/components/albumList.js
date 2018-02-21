import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class AlbumList extends Component {
	render() {
		console.log(this.props.message);
		console.log(this.props);
		const albums = this.props.message.map((albums, key) => {
			return (
				<div key={key} className=" album-container columns five u-max-full-">
					<h4 className="text-center">{albums.artist}</h4>
					<h6>{albums.title}</h6>
					<img
						className="u-max-full"
						alt="album artwok here"
						src={albums.imageMedium}
					/>
					<button className="u-pull-right">Add</button>
				</div>
			);
		});
		// }
		return (
			<div className="container">
				<div className=" center u-full-width" id="AlbumList">
					<hr className="u-full-width" />
					{albums}
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(AlbumList);
