import React from 'react';
import landing from './images/landing.jpg';

export default () => {
	return (
		<div id="landing" className="center">
			<img id="landing-image" src={landing} alt="records" />
		</div>
	);
};
