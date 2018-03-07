import React from 'react';
import landing from './images/landing.jpg';

export default () => {
	return (
		<div id="landing landing-container">
			<img
				id="landing-image"
				className="u-full-width"
				src={landing}
				alt="records"
			/>
			<div id="landing-text-one">
				<h1>TRACK</h1>
				<h1>YOUR</h1> <h1>COLLECTION.</h1>
			</div>
			<div id="landing-text-two">
				<h1>FEED</h1> <h1>YOUR</h1> <h1>PASSION!</h1>
			</div>
		</div>
	);
};
