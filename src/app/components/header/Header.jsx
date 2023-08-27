import React from 'react';
// import PropTypes from 'prop-types';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Select } from 'antd';
import { changeLang, checkLanguageSupport, supportLanguages } from '../../appAction';
import ReactIcon from '../../../assets/images/delta.png';
import DeltaDivider from '../divider/DeltaDivider';

import './header.scss';

const { Option } = Select;

const Header = () => {
	const history = useHistory();
	const { locale } = useRouteMatch()?.params;

	return (
		<div className="header">
			<div className="header__body">
				<div className="header__body__title">
					<img alt="" className="header__body__title__logo" src={ReactIcon} />
					<div className="header__body__title__divider" />
					<div className="header__body__title__name">Delta Energy Online</div>
				</div>
				<div className="header__body__lang">
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
			<DeltaDivider />
		</div>
	);
};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
