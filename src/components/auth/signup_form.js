import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SignupForm extends Component {
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
			<div id="SignupForm" className="container sign-in-up">
				{this.renderAlert()}
				<form onSubmit={handleSubmit} className="row center">
					<div>
						<Field
							label="Email"
							name="email"
							component="input"
							type="text"
							placeholder="Enter Email"
						/>
						<Field
							label="Password"
							name="password"
							component="input"
							type="password"
							placeholder="Enter Password"
						/>
						<Field
							label="Password Confirmation"
							name="passwordConfirmation"
							component="input"
							type="password"
							placeholder="Confirm Password"
						/>
						<button
							className="button-primary:focus form-button"
							type="submit"
							disabled={pristine || submitting}>
							Sign IN
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

	if (!values.email) {
		errors.email = 'Please enter an email';
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
	form: 'signup',
	validate
})(SignupForm);
