import React, { useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import './validateCode.scss';

const ValidateCode = () => {
	const { formatMessage } = useIntl();
	const [captcha, setCaptcha] = useState();
	const canvasRef = useRef();

	// 生成隨機驗證碼
	const generateCaptcha = () => {
		const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let newCaptcha = '';
		for (let i = 0; i < 6; i += 1) {
			const randomIndex = Math.floor(Math.random() * chars.length);
			newCaptcha += chars[randomIndex];
		}
		setCaptcha(newCaptcha);
	};

	// 在元件首次渲染時生成驗證碼
	useEffect(() => {
		generateCaptcha();
	}, []);

	// 當驗證碼改變時繪製新的驗證碼圖片
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');

		// 清空畫布
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// 繪製新的驗證碼
		ctx.font = '24px Arial';
		ctx.fillStyle = 'white';
		ctx.fillText(captcha, 10, 30);
	}, [captcha]);

	return (
		<div className="validateCode">
			<canvas ref={canvasRef} width={120} height={40} className="validateCode__canvas" />
			<Button type="text" className="validateCode__change" onClick={generateCaptcha} icon={<ReloadOutlined />}>
				{formatMessage({ id: 'login.validate.change' })}
			</Button>
		</div>
	);
};

ValidateCode.propTypes = {};

export default ValidateCode;
