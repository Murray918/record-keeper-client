import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PasswordUpdateForm from './password_update_form';
import EmailUpdateForm from './email_update_form';

class UpdateUser extends Component {
	handleEmailClick(e) {
		console.log(this.props);
		this.props.renderEmailForm();
		console.log(this.props.updateComponent);
	}

	handlePasswordClick(e) {
		this.props.renderPasswordForm();
	}

	render() {
		switch (this.props.updateComponent) {
			case 'email_component':
				return <EmailUpdateForm />;
			case 'password_component':
				return <PasswordUpdateForm />;
			//this is what should apear first
			default:
				return (
					<div className="container center">
						<div calssName="center">
							<button onClick={e => this.handleEmailClick(e)}>
								Change Email
							</button>
						</div>
						<div calssName="center">
							<button onClick={e => this.handlePasswordClick(e)}>
								Change Password
							</button>
						</div>
					</div>
				);
		}
	}
}

function mapStateToProps(state) {
	return {
		updateComponent: state.user.updateComponent
	};
}

export default connect(mapStateToProps, actions)(UpdateUser);
