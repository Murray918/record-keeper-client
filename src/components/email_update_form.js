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
		const { handleSubmit, pristine, submitting } = this.props;
		return (
			<div className="container center">
				<form onSubmit={handleSubmit}>
					<div className=" center">
						<Field
							value="newEmail"
							label="newEmail"
							name="newEmail"
							component="input"
							type="email"
							placeholder="Enter New Email"
						/>
					</div>
					<div className=" center">
						<Field
							value="newEmailConfirm"
							label="newEmailConfirm"
							name="newEmailConfirm"
							component="input"
							type="email"
							placeholder="Confirm Email"
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

	if (!values.newEmail || !values.newEmailConfirm) {
		errors.newEmail = 'Please enter an email';
	}

	return errors;
};

export default reduxForm({
	form: 'newemail',
	validate,
	destroyOnUnmount: false
})(EmailUpdateForm);
