import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Search = props => {
	const { handleSubmit, pristine, submitting } = props;
	return (
		<div id="Search">
			<form className="twelve" onSubmit={handleSubmit}>
				<div className="search-wrapper">
					<Field
						id="search-bar"
						className=""
						name="query"
						component="input"
						type="text"
						placeholder="Search"
					/>
					<button
						id="search-btn"
						className="button-primary:focus"
						type="submit"
						disabled={pristine || submitting}>
						SEARCH
					</button>
				</div>
			</form>
		</div>
	);
};

export default reduxForm({
	form: 'search' // a unique identifier for this form
})(Search);
