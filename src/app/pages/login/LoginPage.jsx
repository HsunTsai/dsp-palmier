import React from 'react';
import { useIntl } from 'react-intl';
import { Button, Form, Input } from 'antd';
// import PropTypes from 'prop-types';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import ValidateCode from './validateCode/ValidateCode';

import './loginPage.scss';

const LoginPage = () => {
	const { formatMessage } = useIntl();
	const [form] = Form.useForm();

	return (
		<div className="loginPage">
			<div className="loginPage__welcome">
				{formatMessage({ id: 'login.welcome' })}
				<div className="loginPage__welcome--bold">Delta® Energy Online</div>
			</div>
			<Form className="loginPage__form" form={form}>
				{/* 請輸入帳號 */}
				<Form.Item name="username">
					<Input placeholder={formatMessage({ id: 'login.username.hint' })} prefix={<UserOutlined />} />
				</Form.Item>
				{/* 請輸入密碼 */}
				<Form.Item name="password">
					<Input placeholder={formatMessage({ id: 'login.password.hint' })} prefix={<LockOutlined />} />
				</Form.Item>
				{/* 驗證碼 */}
				<ValidateCode />
				<Form.Item name="verificationCode">
					<Input
						placeholder={formatMessage({ id: 'login.verification.code.hint' })}
						prefix={<LockOutlined />}
					/>
				</Form.Item>
				<Button className="loginPage__form__btn" type="primary">
					{formatMessage({ id: 'common.login' })}
				</Button>
			</Form>
		</div>
	);
};

LoginPage.propTypes = {};

export default LoginPage;
