import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';
import { useActions } from 'src/hooks/useActions';
import { useAuth } from 'src/hooks/useAuth';

interface Props {
	children: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }): JSX.Element => {
	const { user } = useAuth();
	const { logout, checkAuth } = useActions();
	const { pathname } = useRouter();

	useEffect(() => {
		const refreshToken = Cookies.get('refresh');
		if (refreshToken) checkAuth();
	}, []);

	useEffect(() => {
		const refreshToken = Cookies.get('refresh');
		if (!refreshToken && user) logout();
	}, [pathname]);

	return <>{children}</>;
};

export default AuthProvider;
