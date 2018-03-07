import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SigninForm extends Component {
	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger center">
					<strong>Oops: </strong>
					{this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, pristine, submitting } = this.props;

		return (
			<div id="SigninForm" className="auth-wrapper">
				{this.renderAlert()}
				<form onSubmit={handleSubmit} className="">
					<div className="single-form-container">
						<Field
							label="Username"
							name="email"
							component="input"
							type="text"
							placeholder=" Enter Email"
						/>
						<Field
							label="Password"
							name="password"
							component="input"
							type="password"
							placeholder="Enter Password"
						/>
						<button
							className="form-button"
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

export default reduxForm({
	form: 'signin'
})(SigninForm);
