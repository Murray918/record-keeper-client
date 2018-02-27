import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class EmailUpdateForm extends Component {
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
		const { handleEmailReset, pristine, submitting } = this.props;
		return (
			<div className="container center">
				<form onSubmit={handleEmailReset}>
					<div className=" center">
						<Field
							label="newEmail"
							name="newEmail"
							component="input"
							type="text"
							placeholder="Enter Email"
						/>
					</div>
					<div className=" center">
						<Field
							label="Email"
							name="newEmailConfirm"
							component="input"
							type="text"
							placeholder="Enter Email"
						/>
					</div>
					<button type="submit" disabled={pristine || submitting}>
						Sign IN
					</button>
				</form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};

	if (!values.newEmail) {
		errors.newEmail = 'Please enter an email';
	}

	return errors;
};

export default reduxForm({
	form: 'newemail',
	validate
})(EmailUpdateForm);
