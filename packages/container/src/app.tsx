import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/marketingApp';
import Header from './components/Header';

export default () => {
	return (
		<BrowserRouter>
			<div>
				<h1>Container</h1>
				{/* props are non interactive and being used as placehoder values */}
				<Header signedIn={false} onSignOut={() => {}} />
				<MarketingApp />
			</div>
		</BrowserRouter>
	);
};
