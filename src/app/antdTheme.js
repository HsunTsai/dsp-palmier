/**
 * 參數參考資料
 * https://ant.design/docs/react/customize-theme
 */

import { theme } from 'antd';

const { darkAlgorithm } = theme;

export default () => ({
	algorithm: darkAlgorithm,
	token: {
		colorPrimary: '#0087dc',
		borderRadius: 4,
		colorBorder: '#162941',
	},
	components: {
		Button: {
			// colorPrimary: '#0087dc',
			// algorithm: true, // Enable algorithm
		},
		Input: {
			colorBgContainer: '#142439',
			prefix: {
				marginRight: 12,
			},
		},
	},
});
