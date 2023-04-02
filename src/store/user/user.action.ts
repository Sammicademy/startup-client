import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'src/helpers/api.helper';
import { AuthService } from 'src/services/auth.service';
import { AuthUserResponse } from './user.interface';

export const register = createAsyncThunk<
	AuthUserResponse,
	{ password: string; email: string; callback: () => void }
>('auth/register', async ({ email, password, callback }, thunkApi) => {
	try {
		const response = await AuthService.register(email, password);
		callback();
		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue(errorCatch(error));
	}
});

export const login = createAsyncThunk<
	AuthUserResponse,
	{ password: string; email: string; callback: () => void }
>('auth/login', async ({ email, password, callback }, thunkApi) => {
	try {
		const response = await AuthService.login(email, password);
		callback();
		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue(errorCatch(error));
	}
});

export const sendVerificationCode = createAsyncThunk<
	'Success',
	{ email: string; isUser: boolean; callback: () => void }
>('auth/verification-code', async ({ email, isUser, callback }, thunkApi) => {
	try {
		const response = await AuthService.sendOtp(email, isUser);
		callback();
		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue(errorCatch(error));
	}
});

export const verifyVerificationCode = createAsyncThunk<
	'Success',
	{ email: string; otpVerification: string; callback: () => void }
>('auth/verify-code', async ({ email, otpVerification, callback }, thunkApi) => {
	try {
		const response = await AuthService.verifyOtp(email, otpVerification);
		callback();
		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue(errorCatch(error));
	}
});

export const editProfilePassword = createAsyncThunk<
	'Success',
	{ email: string; password: string; callback: () => void }
>('auth/edit-user', async ({ email, password, callback }, thunkApi) => {
	try {
		const response = await AuthService.editProfilePassword(email, password);
		callback();
		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue(errorCatch(error));
	}
});

export const logout = createAsyncThunk('auth/logout', () => {
	AuthService.logout();
});

export const checkAuth = createAsyncThunk<AuthUserResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens();
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
