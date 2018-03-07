import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PasswordUpdateForm from './password_update_form';
import EmailUpdateForm from './email_update_form';

class UpdateUser extends Component {
	handleEmailClick(e) {
		this.props.renderEmailForm();
	}

	handlePasswordClick(e) {
		this.props.renderPasswordForm();
	}

	handleEmailReset({ newEmail, newEmailConfirm }) {
		this.props.changeEmail({ newEmail, newEmailConfirm });
	}

	handlePasswordReset({ newPassword, newPasswordConfirmation }) {
		this.props.changePassword({ newPassword, newPasswordConfirmation });
	}

	render() {
		return (
			<div id="UpdateUser" className="list-wrapper">
				<div className="info-wrapper">
					<p>
						Here you can update your user name and password.{' '}
						<strong>Just remember that these changes are perminant!</strong>
					</p>
				</div>
				<div className="form-container">
					<EmailUpdateForm onSubmit={this.handleEmailReset.bind(this)} />
				</div>
				<div className="form-container">
					<PasswordUpdateForm onSubmit={this.handlePasswordReset.bind(this)} />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		updateComponent: state.user.updateComponent,
		changeEmailMessage: state.user.changeEmailMessage
	};
}

export default connect(mapStateToProps, actions)(UpdateUser);
