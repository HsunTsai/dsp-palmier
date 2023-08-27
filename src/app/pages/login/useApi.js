import { notification } from 'antd';
import { useCallback, useState } from 'react';

export default () => {
	const [loading, setLoading] = useState();

	const handleLogin = useCallback(data => {
		setLoading(true);
		setTimeout(() => {
			if (data?.username === 'admin' && data?.password === 'admin') {
				notification.success({ message: '登入成功', description: '登入成功' });
			} else notification.error({ message: '登入失敗', description: '登入失敗' });
			setLoading();
		}, 2000);
	}, []);

	return { loading, handleLogin };
};
