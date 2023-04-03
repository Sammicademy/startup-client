import Cookies from 'js-cookie';
import { AuthTokens } from 'src/store/user/user.interface';

export const saveTokensCookie = (data: AuthTokens) => {
	Cookies.set('access', data.accessToken);
	Cookies.set('refresh', data.refreshToken);
};

export const removeTokensCookie = () => {
	Cookies.remove('access');
	Cookies.remove('refresh');
};
