import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import quertString from 'query-string';
import { Empty } from 'antd';
// import PropTypes from 'prop-types';
import Sidebar from '../components/sidebar/Sidebar';
import sideMenuSchema from '../components/sidebar/sideMenuSchema';
import findItemByKey from '../components/sidebar/findItemByKey';

import './home.scss';

const Home = () => {
	const { search } = useHistory()?.location;
	const { focusPage } = quertString.parse(search);

	const title = useMemo(() => findItemByKey(sideMenuSchema, 'key', focusPage)?.label, [focusPage]);

	return (
		<div className="home">
			<Sidebar className="home__sidebar" />
			<div className="home__body">{title || <Empty />}</div>
		</div>
	);
};

Home.propTypes = {};

export default Home;
