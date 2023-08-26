import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { countDown, countUp } from './reduxSampleAction';

import './reduxSample.scss';

const LegacyReduxSample = ({ count, actionCountUp, actionCountDown }) => (
	<div className="reduxSample">
		<h2>這是一個透過 redux 操作的範例</h2>
		<h3>使用 connect 的 redux</h3>
		<h3>{`Now Count ==> ${count}`}</h3>
		<div>
			<Button style={{ marginRight: 8 }} onClick={() => actionCountUp(count)}>
				Count Up
			</Button>
			<Button onClick={() => actionCountDown(count)}>Count Down</Button>
		</div>
	</div>
);

LegacyReduxSample.defaultProps = {
	count: 0,
};

LegacyReduxSample.propTypes = {
	count: PropTypes.number,
	actionCountUp: PropTypes.func.isRequired,
	actionCountDown: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	const { count } = state.reduxSample;
	return { count };
};

const mapDispatchToProps = dispatch => ({
	actionCountUp: count => dispatch(countUp(count)),
	actionCountDown: count => dispatch(countDown(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LegacyReduxSample);
