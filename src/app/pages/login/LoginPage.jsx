import React, { useCallback, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Button, Form, Input, notification, Spin } from 'antd';
// import PropTypes from 'prop-types';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import ValidateCode from './validateCode/ValidateCode';
import useApi from './useApi';

import './loginPage.scss';

const LoginPage = () => {
	const { formatMessage } = useIntl();
	const [form] = Form.useForm();

	const { loading, handleLogin } = useApi();

	const onSubmit = useCallback(() => {
		form.validateFields()
			.then(data => handleLogin(data))
			.catch(() => notification.error({ message: '資料有誤', description: '請檢察欄位' }));
	}, []);

	const formSchema = useMemo(
		() => [
			{
				name: 'username',
				placeholder: formatMessage({ id: 'login.username.hint' }),
				required: true,
				render: props => <Input prefix={<UserOutlined />} {...props} />,
			},
			{
				name: 'password',
				placeholder: formatMessage({ id: 'login.password.hint' }),
				required: true,
				render: props => <Input prefix={<LockOutlined />} {...props} />,
			},
			{
				name: 'verification',
				placeholder: formatMessage({ id: 'login.verification.code.hint' }),
				required: true,
				rules: [
					{
						validator: (_, value) => {
							if (value) return Promise.resolve();
							return Promise.reject(new Error(formatMessage({ id: 'login.verification.code.error' })));
						},
					},
				],
				render: props => <ValidateCode {...props} />,
			},
		],
		[formatMessage]
	);

	return (
		<div className="loginPage">
			<div className="loginPage__welcome">
				{formatMessage({ id: 'login.welcome' })}
				<div className="loginPage__welcome--bold">Delta® Energy Online</div>
			</div>
			<Form
				className="loginPage__form"
				form={form}
				onKeyDown={e => {
					if (e?.key === 'Enter') onSubmit();
				}}
			>
				<Spin spinning={!!loading}>
					{formSchema.map(({ name, placeholder, required, rules, render }) => (
						<Form.Item
							key={name}
							name={name}
							rules={(Array.isArray(rules) ? rules : []).concat(
								required ? [{ required: true, message: placeholder }] : []
							)}
						>
							{render({ name, placeholder, required })}
						</Form.Item>
					))}
				</Spin>
				<Button className="loginPage__form__btn" type="primary" onClick={onSubmit} loading={loading}>
					{formatMessage({ id: 'common.login' })}
				</Button>
			</Form>
		</div>
	);
};

LoginPage.propTypes = {};

export default LoginPage;
