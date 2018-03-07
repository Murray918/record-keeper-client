import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import SuccessMessage from './success_message';
import ReactDOM from 'react-dom';

class AlbumList extends Component {
	renderRemovedMessage(target) {
		target.target.disabled = true;
		let targetCard = 'user-record :' + target.target.id;
		let mountPoint = document.createElement('div');
		document.getElementById(targetCard).appendChild(mountPoint);
		ReactDOM.render(
			<SuccessMessage removedMessage={this.props.removedMessage} />,
			mountPoint
		);
	}

	handleAddRecord(targetAlbum) {
		let album = this.props.searchResults[targetAlbum.target.id];
		this.props.addRecord(album);
		this.renderRemovedMessage(targetAlbum);
	}

	render() {
		const albums = this.props.searchResults.map((album, key) => {
			let cardId = 'user-record :' + key;
			return (
				<div key={key} id={cardId} className=" album-container">
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
						className="u-pull-right button-primary:focus form-button">
						ADD
					</button>
				</div>
			);
		});
		return (
			<div>
				<hr className="u-full-width-max" />
				<div className="list-wrapper" id="AlbumList">
					{albums}
				</div>
			</div>
		);
	}
}
export default connect(null, actions)(AlbumList);
