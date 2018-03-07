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
			<div id="SearchForm">
				<h1>Please Provide Your New Email</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-wrapper">
						<Field
							value="newEmail"
							className="form-item"
							label="newEmail"
							name="newEmail"
							component="input"
							type="email"
							placeholder="Enter New Email"
						/>
						<Field
							value="newEmailConfirm"
							className="form-item"
							label="newEmailConfirm"
							name="newEmailConfirm"
							component="input"
							type="email"
							placeholder="Confirm Email"
						/>
						<button
							className="form-button button-primary:focus
							"
							type="submit"
							disabled={pristine || submitting}>
							SUBMIT
						</button>
					</div>
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
