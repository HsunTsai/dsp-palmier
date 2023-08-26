import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
/* You can cache page when page cahnge by import CacheRoute & CacheSwitch */
// import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import Loadable from 'react-loadable';

import Header from './components/header/Header';
import RouterLoading from './components/loading/Loading';

import './app.scss';

const pages = [
	{
		path: '/playground',
		name: 'Playground',
		component: Loadable({ loader: () => import('./pages/playground/Playground'), loading: RouterLoading }),
	},
	{
		path: '/i18n',
		name: 'I18N',
		component: Loadable({ loader: () => import('./pages/i18n/I18N'), loading: RouterLoading }),
	},
	{
		path: '/redux',
		name: 'ReduxSample',
		component: Loadable({ loader: () => import('./pages/reduxSample/ReduxSample'), loading: RouterLoading }),
	},
	{
		path: '/redux-legacy',
		name: 'LegacyReduxSample',
		component: Loadable({ loader: () => import('./pages/reduxSample/LegacyReduxSample'), loading: RouterLoading }),
	},
	{
		path: '/about',
		name: 'About',
		component: Loadable({ loader: () => import('./pages/about/About'), loading: RouterLoading }),
	},
	{
		path: '/topic',
		name: 'Topic',
		component: Loadable({ loader: () => import('./pages/topic/Topic'), loading: RouterLoading }),
	},
];

const App = () => (
	<div className="app">
		<Header pages={pages} />
		<Switch>
			{pages.map((page, index) => (
				<Route key={index.toString()} exact path={`/:locale${page.path}`} component={page.component} />
			))}
			<Redirect to={pages[0].path} />
		</Switch>
	</div>
);

export default App;
