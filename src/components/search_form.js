import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Search = props => {
	const { handleSubmit, pristine, submitting } = props;
	return (
		<div id="Search">
			<form className="twelve" onSubmit={handleSubmit}>
				<div className="row">
					<div id="search-bar" className="columns twelve
            ">
						<Field
							className="u-full-width"
							name="query"
							component="input"
							type="text"
							placeholder="Search"
						/>
					</div>
					<div className="row center">
						<button
							id="search-btn"
							className="button-primary:focus"
							type="submit"
							disabled={pristine || submitting}>
							SEARCH
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default reduxForm({
	form: 'search' // a unique identifier for this form
})(Search);
