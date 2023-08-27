const INITIAL_STATE = {};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const app = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

export default app;
