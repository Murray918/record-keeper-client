import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PasswordUpdateForm extends Component {
	render() {
		return (
			<div className="container center">
				<a>See My Record Collection</a>
				<h1>Please Provide A New Password</h1>
				<form>
					<div className="center">
						<Field
							label="Password"
							name="password"
							component="input"
							type="password"
							placeholder="Enter Password"
						/>
					</div>
					<div className="center">
						<Field
							label="Password Confirmation"
							name="passwordConfirmation"
							component="input"
							type="password"
							placeholder="Confirm Password"
						/>
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
	form: 'passwordUpdateForm',
	validate
})(PasswordUpdateForm);
