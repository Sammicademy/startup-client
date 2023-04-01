import axios from 'axios';
import Cookies from 'js-cookie';
import { API_URL, getAuthUrl } from 'src/config/api.config';
import { removeTokensCookie, saveStorage } from 'src/helpers/auth.helper';
import { AuthUserResponse } from 'src/store/user/user.interface';

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axios.post<AuthUserResponse>(`${API_URL}${getAuthUrl('register')}`, {
			email,
			password,
		});

		if (response.data.accessToken) {
			saveStorage(response.data);
		}

		return response;
	},

	async login(email: string, password: string) {
		const response = await axios.post<AuthUserResponse>(`${API_URL}${getAuthUrl('login')}`, {
			email,
			password,
		});

		if (response.data.accessToken) {
			saveStorage(response.data);
		}

		return response;
	},

	logout() {
		removeTokensCookie();
		localStorage.removeItem('user');
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken');
		const response = await axios.post(`${API_URL}${getAuthUrl('access')}`, { refreshToken });

		if (response.data.accessToken) {
			saveStorage(response.data);
		}

		return response;
	},
};
