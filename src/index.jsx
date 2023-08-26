import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './app/App';
import IndexProvider from './app/IndexProvider';
import services from './app/config/services';

import './index.scss';

const container = document.getElementById('app');
const root = createRoot(container);
const render = () =>
	root.render(
		<BrowserRouter basename={services.getContextRoot}>
			<Switch>
				<Route
					path="/:locale?" // ? => unnecessary
					render={props => (
						<IndexProvider {...props}>
							<App />
						</IndexProvider>
					)}
				/>
			</Switch>
		</BrowserRouter>
	);

render();
if (module.hot) {
	module.hot.accept('./app/App', () => {
		render();
	});
}
