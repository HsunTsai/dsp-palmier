module.exports = function babel(api) {
	const presets = ['@babel/preset-env', '@babel/preset-react'];
	const plugins = [];
	const ENV = api.env();
	if (ENV === 'development') plugins.push('react-refresh/babel');

	return { presets, plugins };
};
