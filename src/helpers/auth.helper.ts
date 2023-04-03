import Cookies from 'js-cookie';
import { AuthTokens, AuthUserResponse } from 'src/store/user/user.interface';

export const saveTokensCookie = (data: AuthTokens) => {
	Cookies.set('next-auth.access-token', data.accessToken);
};

export const saveStorage = (data: AuthUserResponse) => {
	saveTokensCookie(data);
};

export const removeTokensCookie = () => {
	Cookies.remove('next-auth.access-token');
};
