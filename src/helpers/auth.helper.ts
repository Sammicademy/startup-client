import Cookies from 'js-cookie';
import { AuthTokens, AuthUserResponse } from 'src/store/user/user.interface';

export const saveTokensCookie = (data: AuthTokens) => {
	Cookies.set('accessToken', data.accessToken);
	Cookies.set('refreshToken', data.refreshToken);
};

export const saveStorage = (data: AuthUserResponse) => {
	saveTokensCookie(data);
	localStorage.setItem('user', JSON.stringify(data.user));
};

export const removeTokensCookie = () => {
	Cookies.remove('accessToken');
	Cookies.remove('refreshToken');
};
