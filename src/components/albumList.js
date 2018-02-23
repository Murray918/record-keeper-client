import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class AlbumList extends Component {
	handleAddRecord(targetAlbum) {
		let album = this.props.searchResults[targetAlbum.target.id];
		this.props.addRecord(album);
	}

	render() {
		const albums = this.props.searchResults.map((album, key) => {
			return (
				<div key={key} className=" album-container columns five u-max-full-">
					<h4 className="text-center">{album.artist}</h4>
					<h6>{album.title}</h6>
					<img
						className="u-max-full"
						alt="album artwok here"
						src={album.imageMedium}
					/>
					<button
						id={key}
						onClick={this.handleAddRecord.bind(this)}
						type="click"
						className="u-pull-right">
						Add
					</button>
				</div>
			);
		});
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
