import React from 'react';
import landing from './images/landing.jpg';

export default () => {
	return (
		<div id="landing" className="container">
			This is the landing page... sign in to access the secure page
			<img id="landing-image" src={landing} alt="records" />
		</div>
	);
};
