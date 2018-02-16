import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderLinks() {
		if (this.props.authenticated) {
			return [
				<li key={1} className="nav-item">
					<Link className="nav-link" to="/signout">
						Sign Out
					</Link>
				</li>,
				<li key={2} className="nav-item">
					<Link className="nav-link" to="/feature">
						Search Records
					</Link>
				</li>
			];
		} else {
			return [
				<li key={1} className="nav-item">
					<Link className="nav-link" to="/signin">
						Sign In
					</Link>
				</li>,
				<li key={2} className="nav-item">
					<Link className="nav-link" to="/signup">
						Sign Up
					</Link>
				</li>,
				<li key={3} className="nav-item">
					<Link className="nav-link" to="/feature">
						Search Records
					</Link>
				</li>
			];
		}
	}

	render() {
		return (
			<div>
				<nav id="Nav" className="navbar navbar-light">
					<Link to="/" id="home" className="navbar-brand">
						Home
					</Link>
					<ul className="nav navbar-nav">{this.renderLinks()}</ul>
				</nav>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated
	};
}

export default connect(mapStateToProps)(Header);
