import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { MountType } from './types/remote-types';

//mount function to start up the app
const mount: MountType = (element: Element) => {
	if (!element) {
		throw new Error(`Invalid element ${element} in marketing app`);
	}

	ReactDOM.render(<App />, element);
};

//if we ar ein dev and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#_marketing-dev-root');

	if (devRoot) {
		mount(devRoot);
	}
}

//we are running through container and we should export the mount function
export { mount };
