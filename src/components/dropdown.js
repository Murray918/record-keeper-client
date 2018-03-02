import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

export default class Dropdown extends Component {
	render() {
		if (this.props.menu === false) {
			return null;
		}
		return [
			<li key={3} ref="item" className="menu">
				<Link className="item" to="/signout">
					Sign Out
				</Link>
			</li>,
			<li key={4} ref="item2" className="menu">
				<Link className="item" to="/updateuser">
					Update Info
				</Link>
			</li>,
			<li key={5} ref="item3" className="menu">
				<Link className="item" to="/user">
					View Your Collection
				</Link>
			</li>
		];
	}
}
