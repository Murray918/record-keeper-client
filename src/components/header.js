import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { NavLink, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Dropdown from './dropdown';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		menu: false
	};
	renderLinks() {
		if (this.props.authenticated) {
			return [
				<li key={1} className="nav-text nav-item">
					<NavLink className="nav-link" to="/search">
						Search
					</NavLink>
				</li>,
				<li key={2} className="nav-text">
					<NavLink
						className="button"
						onClick={this.handleDropdown.bind(this)}
						to="#">
						{localStorage.getItem('user')}
					</NavLink>
				</li>
			];
		} else {
			return [
				<li key={1} className="nav-text">
					<NavLink to="/signin">Sign In</NavLink>
				</li>,
				<li key={2} className="nav-text">
					<NavLink to="/signup">Sign Up</NavLink>
				</li>
			];
		}
	}

	handleDropdown() {
		if (this.state.menu === false) {
			console.log(this.state.menu);
			this.setState({
				menu: true
			});
		} else if (this.state.menu === true) {
			console.log(this.state.menu);
			this.setState({
				menu: false
			});
		}
	}

	render() {
		return (
			<div className="container">
				<nav id="Nav">
					<ul className="">
						<li key={0} className="nav-text">
							<NavLink to="/">Home</NavLink>
						</li>
						{this.renderLinks()}
						<Dropdown menu={this.state.menu} />
					</ul>
				</nav>
				<div className="container">{this.props.children}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated
	};
}

export default connect(mapStateToProps, actions)(Header);
