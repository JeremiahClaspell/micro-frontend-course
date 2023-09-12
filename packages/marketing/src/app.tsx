import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

//this is used to get @material to prefix the auto-generated class names with the name of the service
//to prevent naming conflicts between other micro-frontends.
const generateClassName = createGenerateClassName({
	productionPrefix: 'marketing',
});

export default () => {
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/pricing" component={Pricing} />
						<Route path="/" component={Landing} />
					</Switch>
				</BrowserRouter>
			</StylesProvider>
		</div>
	);
};
