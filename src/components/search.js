import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

const Search = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<div id="Search">
			<form className="twelve" onSubmit={handleSubmit}>
				<div className="row center">
					<div className=" columns three">
						<Field
							name="favoriteColor"
							className="u-full-width"
							component="select">
							<option>Type</option>
							<option value="album">album</option>
							<option value="artist">artist</option>
							<option value="song">song</option>
						</Field>
					</div>
					<div className=" columns nine u u-pull-right
            ">
						<Field
							className="u-full-width"
							name="email"
							component="input"
							type="text"
							placeholder="Search"
						/>
					</div>
					<div className="row columns twelve ">
						<button
							className="columns five"
							type="submit"
							disabled={pristine || submitting}>
							Submit
						</button>
						<button
							className="columns five u-pull-right"
							type="button"
							disabled={pristine || submitting}
							onClick={reset}>
							Clear Values
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
