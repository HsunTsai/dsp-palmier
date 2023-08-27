import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Menu } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import sideMenuSchema from './sideMenuSchema';

import './sidebar.scss';

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState();

	return (
		<div className={classNames('sidebar', { 'sidebar--collapsed': collapsed })}>
			<Menu
				className="sidebar__menu"
				mode="inline"
				theme="dark"
				inlineCollapsed={collapsed}
				items={sideMenuSchema}
			/>
			<div className="sidebar__footer">
				<div
					className={classNames('sidebar__footer__version', {
						'sidebar__footer__version--hide': collapsed,
					})}
				>
					{`Version: v. ${process.env.VERSION}`}
				</div>
				<Button className="sidebar__footer__btn" type="text" onClick={() => setCollapsed(!collapsed)}>
					{collapsed ? <RightOutlined /> : <LeftOutlined />}
				</Button>
			</div>
		</div>
	);
};

Sidebar.propTypes = {};

export default Sidebar;
