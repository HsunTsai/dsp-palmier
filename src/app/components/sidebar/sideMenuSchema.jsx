import React from 'react';
import {
	AlertOutlined,
	ClusterOutlined,
	ControlOutlined,
	DashboardOutlined,
	FieldTimeOutlined,
	FileTextOutlined,
	LineChartOutlined,
	SearchOutlined,
	SettingFilled,
	UnorderedListOutlined,
} from '@ant-design/icons';

export default [
	{ key: 'overview', icon: <ClusterOutlined />, label: '總覽展示' },
	{ key: 'instant', icon: <FieldTimeOutlined />, label: '即時資訊' },
	{ key: 'search', icon: <SearchOutlined />, label: '查詢' },
	{
		key: 'energySaving',
		icon: <DashboardOutlined />,
		label: '節能專案',
		children: [
			{ key: 'energySaving-1', label: '節能專案 1' },
			{ key: 'energySaving-2', label: '節能專案 2' },
			{ key: 'energySaving-3', label: '節能專案 3' },
		],
	},
	{
		key: 'energySavingSetting',
		icon: <UnorderedListOutlined />,
		label: '節能專案檢核管理',
		children: [{ key: 'energySavingSetting-1', label: '節能專案檢核管理 1' }],
	},
	{
		key: 'demand',
		icon: <ControlOutlined />,
		label: '需量管理',
		children: [
			{ key: 'demand-1', label: '需量管理 1' },
			{ key: 'demand-2', label: '需量管理 2' },
			{ key: 'demand-3', label: '需量管理 3' },
		],
	},
	{
		key: 'report',
		icon: <FileTextOutlined />,
		label: '報表',
		children: [
			{ key: 'report-1', label: '報表 1' },
			{ key: 'report-2', label: '報表 2' },
		],
	},
	{
		key: 'analyze',
		icon: <LineChartOutlined />,
		label: '分析',
		children: [
			{ key: 'analyze-1', label: '分析 1' },
			{ key: 'analyze-2', label: '分析 2' },
			{ key: 'analyze-3', label: '分析 3' },
		],
	},
	{
		key: 'alert',
		icon: <AlertOutlined />,
		label: '警報',
		children: [
			{ key: 'alertSetting', label: '警報設置' },
			{ key: 'alertSearch', label: '警報查詢' },
			{ key: 'alertDownload', label: '警報下載' },
		],
	},
	{ key: 'setting', icon: <SettingFilled />, label: '系統設定' },
];
