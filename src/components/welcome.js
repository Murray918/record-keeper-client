import React from 'react';
import landing from './images/landing.jpg';

export default () => {
	return (
		<div id="landing landing-container">
			<img
				id="landing-image"
				calssName="u-full-max"
				src={landing}
				alt="records"
			/>
			<div id="landing-text">
				<h1>TRACK</h1>
				<h1>YOUR</h1> <h1>COLLECTION.</h1>
				<h1>FEED</h1> <h1>YOUR</h1> <h1>PASSION.</h1>
			</div>
		</div>
	);
};
