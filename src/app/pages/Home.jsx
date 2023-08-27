import React from 'react';
// import PropTypes from 'prop-types';
import Sidebar from '../components/sidebar/Sidebar';

import './home.scss';

const Home = () => {
	console.info();
	return (
		<div className="home">
			<Sidebar className="home__sidebar" />
			<div className="home__body">123</div>
		</div>
	);
};

Home.propTypes = {};

export default Home;
