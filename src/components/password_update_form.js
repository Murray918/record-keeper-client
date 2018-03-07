import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class PasswordUpdateForm extends Component {
	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops: </strong>
					{this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, pristine, submitting } = this.props;
		return (
			<div className="container center">
				<h1>Please Provide A New Password</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-wrapper">
						<Field
							className="form-item"
							label="Password"
							name="newPassword"
							component="input"
							type="password"
							placeholder="Enter Password"
						/>
						<Field
							className="form-item"
							label="Password Confirmation"
							name="newPasswordConfirmation"
							component="input"
							type="password"
							placeholder="Confirm Password"
						/>
						<button
							className="form-button button-primary:focus"
							type="submit"
							disabled={pristine || submitting}>
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};

	if (values.password !== values.passwordConfirmation) {
		errors.password = 'Passwords must match';
	}

	if (!values.password) {
		errors.password = 'Please enter a password';
	}

	if (!values.passwordConfirmation) {
		errors.passwordConfirmation = 'Please confirm your password';
	}

	return errors;
};

export default reduxForm({
	form: 'newpassword',
	validate
})(PasswordUpdateForm);
