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
			<div id="SigninForm" className="container sign-in-up">
				{this.renderAlert()}
				<form onSubmit={handleSubmit} className="row center">
					<div className="center">
						<Field
							label="Username"
							name="email"
							component="input"
							type="text"
							placeholder=" Enter Email"
						/>
					</div>
					<div className="center">
						<Field
							label="Password"
							name="password"
							component="input"
							type="password"
							placeholder="Enter Password"
						/>
					</div>

					<div className="center center-btn">
						<button type="submit" disabled={pristine || submitting}>
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
