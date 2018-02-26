import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class EmailUpdateForm extends Component {
	render() {
		const { handleSubmit, pristine, submitting } = this.props;
		return (
			<div className="container center">
				<form>
					<div className=" center">
						<Field
							label="Email"
							name="email"
							component="input"
							type="text"
							placeholder="Enter Email"
						/>
					</div>
					<div className=" center">
						<Field
							label="Email"
							name="email"
							component="input"
							type="text"
							placeholder="Enter Email"
						/>
					</div>
				</form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};

	if (!values.email) {
		errors.email = 'Please enter an email';
	}

	return errors;
};

export default reduxForm({
	form: 'emailUpdateForm',
	validate
})(EmailUpdateForm);
