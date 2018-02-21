import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderLinks() {
		if (this.props.authenticated) {
			return [
				<li key={1} className="two columns ">
					<Link to="/signout">Sign Out</Link>
				</li>,
				<li key={2} className="two columns">
					<Link to="/feature">Search Records</Link>
				</li>
			];
		} else {
			return [
				<li key={1} className="two columns">
					<Link to="/signin">Sign In</Link>
				</li>,
				<li key={2} className="two columns">
					<Link to="/signup">Sign Up</Link>
				</li>,
				<li key={3} className="two columns">
					<Link to="/feature">Search Records</Link>
				</li>
			];
		}
	}

	render() {
		return (
			<div>
				<nav id="Nav" className="row">
					<ul className="ten">
						<li>
							<Link className="two columns" to="/" id="home">
								Home
							</Link>
						</li>
						{this.renderLinks()}
					</ul>
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
