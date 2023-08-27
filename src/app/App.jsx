import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ConfigProvider } from 'antd';

import antdTheme from './antdTheme';
import Header from './components/header/Header';
import RouterLoading from './components/loading/Loading';

import './app.scss';

const pages = [
	{
		path: '/login',
		name: 'Login',
		component: Loadable({ loader: () => import('./pages/login/LoginPage'), loading: RouterLoading }),
	},
];

const App = () => (
	<ConfigProvider theme={antdTheme()} dar>
		<div className="app">
			<Header pages={pages} />
			<div className="app__body">
				<Switch>
					{pages.map((page, index) => (
						<Route key={index.toString()} exact path={`/:locale${page.path}`} component={page.component} />
					))}
					<Redirect to={pages[0].path} />
				</Switch>
			</div>
		</div>
	</ConfigProvider>
);

export default App;
