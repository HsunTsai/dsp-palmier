import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from '../../appReducer';
import { openNotification } from '../../utils/notification';

export default () => {
	const [loading, setLoading] = useState();
	const dispatch = useDispatch();

	const handleLogin = useCallback(data => {
		setLoading(true);
		setTimeout(() => {
			if (data?.username === 'admin' && data?.password === 'admin') {
				openNotification('success', '登入成功', '登入成功');
				dispatch({ type: LOGIN_SUCCESS, payload: { username: 'Admin', id: 'admin' } });
			} else openNotification('error', '登入失敗', '登入失敗');
			setLoading();
		}, 2000);
	}, []);

	return { loading, handleLogin };
};
