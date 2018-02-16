import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class AlbumList extends Component {
	render() {
		console.log(this.props.message);
		console.log(this.props);
		const albums = this.props.message.map((albums, key) => {
			return (
				<div key={key}>
					<p>{albums.artist}</p>
					<img
						className="album-image-large"
						alt="album artwok here"
						src={albums.imageLarge}
					/>
				</div>
			);
		});
		// }
		return (
			<div className="container" id="AlbumList">
				{albums}
			</div>
		);
	}
}
export default connect(null, actions)(AlbumList);
