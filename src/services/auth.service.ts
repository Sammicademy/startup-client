import Cookies from 'js-cookie';
import $axios from 'src/api/axios';
import { getAuthUrl, getMailUrl, getUserUrl } from 'src/config/api.config';
import { removeTokensCookie, saveTokensCookie } from 'src/helpers/auth.helper';
import { AuthUserResponse } from 'src/store/user/user.interface';

export const AuthService = {
	async register(email: string, password: string) {
		const response = await $axios.post<AuthUserResponse>(`${getAuthUrl('register')}`, {
			email,
			password,
		});

		if (response.data.accessToken) {
			saveTokensCookie(response.data);
		}

		return response;
	},

	async login(email: string, password: string) {
		const response = await $axios.post<AuthUserResponse>(`${getAuthUrl('login')}`, {
			email,
			password,
		});

		if (response.data.accessToken) {
			saveTokensCookie(response.data);
		}

		return response;
	},

	async sendOtp(email: string, isUser: boolean) {
		const response = await $axios.post<'Success'>(`${getMailUrl('send-otp')}`, {
			email,
			isUser,
		});

		return response;
	},

	async verifyOtp(email: string, otpVerification: string) {
		const response = await $axios.post<'Success'>(`${getMailUrl('verify-otp')}`, {
			email,
			otpVerification,
		});

		return response;
	},

	async editProfilePassword(email: string, password: string) {
		const response = await $axios.put<'Success'>(`${getUserUrl('edit-password')}`, {
			email,
			password,
		});

		return response;
	},

	async checkUser(email: string) {
		const respone = await $axios.post<'user' | 'no-user'>(`${getAuthUrl('check-user')}`, {
			email,
		});

		return respone.data;
	},

	logout() {
		removeTokensCookie();
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refresh');
		const response = await $axios.post(`${getAuthUrl('access')}`, { refreshToken });

		if (response.data.accessToken) {
			saveTokensCookie(response.data);
		}

		return response;
	},
};
