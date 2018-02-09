import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';
import * as actions from '../../actions';

const renderInput = field => {
	const { input, type } = field;
	return (
		<div>
			<input {...input} type={type} className="form-control" />
		</div>
	);
};

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		console.log(email, password);

		this.props.signinUser({ email, password });
	}

	renderAlert() {
		const { errorMessage } = this.props;
		if (errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong>
					{errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<div className="form-group">
					<label>Email:</label>
					<Field name="email" type="email" component={renderInput} />
				</div>
				<div className="form-group">
					<label>Password:</label>
					<Field name="password" type="password" component={renderInput} />
				</div>
				{this.renderAlert()}
				<button action="submit" className="btn btn-primary">
					Sign in
				</button>
			</Form>
		);
	}
}

function mapStateToProps(state) {
	return {
		// form: state.form,
		errorMessage: state.auth.error
	};
}

Signin = reduxForm({
	form: 'signin'
})(Signin);
export default connect(mapStateToProps, actions)(Signin);
