import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch, useHistory } from 'react-router-dom';
import { Select } from 'antd';
import { changeLang, checkLanguageSupport, supportLanguages } from '../../appAction';
import ReactIcon from '../../../images/react_logo.png';

import './header.scss';

const { Option } = Select;

const Header = ({ pages }) => {
	const history = useHistory();
	const { locale } = useRouteMatch()?.params;

	return (
		<div className="header">
			<img alt="" className="header-icon" src={ReactIcon} />
			{pages.map(page => (
				<NavLink
					key={page.path}
					to={`/${locale}${page.path}`}
					className="header-item"
					activeClassName="header-item--active"
				>
					{page.name}
				</NavLink>
			))}
			<div className="header-select">
				<Select
					value={checkLanguageSupport(locale)}
					onChange={nextLanguage => changeLang({ history, currentLanguage: locale, nextLanguage })}
				>
					{supportLanguages.map(({ label, value }) => (
						<Option key={value} value={value}>
							{label}
						</Option>
					))}
				</Select>
			</div>
		</div>
	);
};

Header.defaultProps = {};

Header.propTypes = {
	pages: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Header;
