import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dropdown extends Component {
	render() {
		console.log(this.props);
		if (this.props.menu === true) {
			return (
				<div onMouseLeave={this.props.onMouseLeave} id="Dropdown">
					<ul className="dropdown-list menu-wrapper">
						<li key={5} ref="item3" className="menu">
							<Link className="item" to="/user">
								<strong>View Your Collection</strong>
							</Link>
						</li>
						<li key={3} ref="item" className="menu">
							<Link className="item" to="/signout">
								<strong>Sign Out</strong>
							</Link>
						</li>
						<li key={4} ref="item2" className="menu">
							<Link className="item" to="/updateuser">
								<strong>Update Info</strong>
							</Link>
						</li>
					</ul>
				</div>
			);
		} else {
			return null;
		}
	}
}
