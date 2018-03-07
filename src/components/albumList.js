import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import SuccessMessage from './success_message';
import ReactDOM from 'react-dom';

class AlbumList extends Component {
	renderMessage(target) {
		//dont let user click more than once
		target.target.disabled = true;
		//get the neede variables
		let targetCard = 'user-record :' + target.target.id;
		let mountPoint = document.createElement('div');
		//use the variables to append the message to the dom
		document.getElementById(targetCard).appendChild(mountPoint);
		ReactDOM.render(
			<SuccessMessage recordMessage={this.props.recordMessage} />,
			mountPoint
		);
		//this remves the message after 5 seconds
		setTimeout(function() {
			document.getElementById(targetCard).removeChild(mountPoint);
		}, 5000);
	}

	handleAddRecord(targetAlbum) {
		let album = this.props.searchResults[targetAlbum.target.id];
		this.props.addRecord(album);
		this.renderMessage(targetAlbum);
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
