import axios from 'axios';
import Cookies from 'js-cookie';
import { API_URL, getAuthUrl, getMailUrl, getUserUrl } from 'src/config/api.config';
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

	async sendOtp(email: string, isUser: boolean) {
		const response = await axios.post<'Success'>(`${API_URL}${getMailUrl('send-otp')}`, {
			email,
			isUser,
		});

		return response;
	},

	async verifyOtp(email: string, otpVerification: string) {
		const response = await axios.post<'Success'>(`${API_URL}${getMailUrl('verify-otp')}`, {
			email,
			otpVerification,
		});

		return response;
	},

	async editProfilePassword(email: string, password: string) {
		const response = await axios.put<'Success'>(`${API_URL}${getUserUrl('edit-password')}`, {
			email,
			password,
		});

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
