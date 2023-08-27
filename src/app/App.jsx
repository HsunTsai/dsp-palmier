import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';

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
	{
		path: '/home',
		name: 'Home',
		component: Loadable({ loader: () => import('./pages/Home'), loading: RouterLoading }),
	},
];

const App = () => {
	const { user } = useSelector(state => state?.app);
	console.info('user', user);
	// const history = useHistory();

	// useEffect(() => {
	// 	if (!user) history.push('/home');
	// 	else history.push('/login');
	// }, [user]);

	// console.info('user', user);

	return (
		<ConfigProvider theme={antdTheme()} dar>
			<div className="app">
				<Header pages={pages} />
				<div className="app__body">
					<Switch>
						{pages.map((page, index) => (
							<Route
								key={index.toString()}
								exact
								path={`/:locale${page.path}`}
								component={page.component}
							/>
						))}
						<Redirect to={pages[0].path} />
					</Switch>
				</div>
			</div>
		</ConfigProvider>
	);
};

export default App;
