import axios from 'axios';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import nextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { API_URL, getAuthUrl } from 'src/config/api.config';
import { AuthService } from 'src/services/auth.service';
import { AuthUserResponse } from 'src/store/user/user.interface';

export default (req: NextApiRequest, res: NextApiResponse) => {
	return nextAuth(req, res, {
		providers: [
			GoogleProvider({
				clientId: process.env.NEXT_PUBLIC_GOOGLE_CLINET_ID as string,
				clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
			}),
			GithubProvider({
				clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
				clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
			}),
		],
		secret: process.env.NEXT_PUBLIC_SECRET_AUTH,
		callbacks: {
			async signIn({ user }) {
				if (user) {
					const email = user.email as string;
					const checkUser = await AuthService.checkUser(email);
					if (checkUser === 'user') {
						const response = await axios.post<AuthUserResponse>(
							`${API_URL}${getAuthUrl('login')}`,
							{
								email,
								password: '',
							}
						);
						res.setHeader('Set-Cookie', [
							serialize('access', response.data.accessToken, { secure: true, path: '/' }),
							serialize('refresh', response.data.refreshToken, { secure: true, path: '/' }),
						]);

						return true;
					} else if (checkUser === 'no-user') {
						const response = await axios.post<AuthUserResponse>(
							`${API_URL}${getAuthUrl('register')}`,
							{
								email,
								fullName: user.name,
								avatar: user.image,
								password: '',
							}
						);
						res.setHeader('Set-Cookie', [
							serialize('access', response.data.accessToken, { secure: true, path: '/' }),
							serialize('refresh', response.data.refreshToken, { secure: true, path: '/' }),
						]);
						return true;
					}
				}
				return false;
			},
		},
	});
};
