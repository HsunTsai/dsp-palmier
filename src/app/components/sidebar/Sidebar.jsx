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
		<div className="sidebar">
			<div className={classNames('sidebar__wrapper', { 'sidebar__wrapper--collapsed': collapsed })}>
				<Menu
					className="sidebar__wrapper__menu"
					mode="inline"
					theme="dark"
					inlineCollapsed={collapsed}
					items={sideMenuSchema}
				/>
				<div className="sidebar__wrapper__footer">
					<div
						className={classNames('sidebar__wrapper__footer__version', {
							'sidebar__wrapper__footer__version--hide': collapsed,
						})}
					>
						{`Version: v. ${process.env.VERSION}`}
					</div>
					<Button
						className="sidebar__wrapper__footer__btn"
						type="text"
						onClick={() => setCollapsed(!collapsed)}
					>
						{collapsed ? <RightOutlined /> : <LeftOutlined />}
					</Button>
				</div>
			</div>
		</div>
	);
};

Sidebar.propTypes = {};

export default Sidebar;
