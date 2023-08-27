import React from 'react';
import PropTypes from 'prop-types';

import './deltaDivider.scss';

const DeltaDivider = ({ height }) => (
	<div className="deltaDivider" style={{ height }}>
		<div className="deltaDivider__primary" />
		<div className="deltaDivider__second" />
		<div className="deltaDivider__third" />
	</div>
);

DeltaDivider.defaultProps = {
	height: 3,
};

DeltaDivider.propTypes = {
	height: PropTypes.number,
};

export default DeltaDivider;
