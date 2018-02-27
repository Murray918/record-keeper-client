import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PasswordUpdateForm from './password_update_form';
import EmailUpdateForm from './email_update_form';

class UpdateUser extends Component {
	componentDidMount() {
		// this.props.changeEmail();
		// this.props.changePassword('23456789', '23456789');
		// console.log(this.props);
		// let tom = 'kaa@baa.com';
		// this.props.changeEmail(tom);
		console.log(this.props);
	}

	handleEmailClick(e) {
		this.props.renderEmailForm();
	}

	handlePasswordClick(e) {
		this.props.renderPasswordForm();
	}

	handleEmailReset({ newEmail, newEmailConfirm }) {
		// console.log(newEmail, newEmailConfirm);
		console.log({ newEmail, newEmailConfirm });
		// console.log(...value);
		this.props.changeEmail({ newEmail, newEmailConfirm });
	}

	handlePasswordReset({ newPassword, newPasswordConfirmation }) {
		this.props.changePassword({ newPassword, newPasswordConfirmation });
	}

	render() {
		switch (this.props.updateComponent) {
			case 'email_component':
			// return <EmailUpdateForm handleSubmit={this.handleSubmit.bind(this)} />;
			case 'password_component':
				return (
					<PasswordUpdateForm
						handlePasswordReset={this.handlePasswordReset.bind(this)}
					/>
				);
			//this is what should apear first
			default:
				return (
					<div className="container center">
						<EmailUpdateForm onSubmit={this.handleEmailReset.bind(this)} />
						<div className="center">
							<button onClick={e => this.handleEmailClick(e)}>
								Change Email
							</button>
						</div>
						<div className="center">
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
		updateComponent: state.user.updateComponent,
		changeEmailMessage: state.user.changeEmailMessage
	};
}

export default connect(mapStateToProps, actions)(UpdateUser);
