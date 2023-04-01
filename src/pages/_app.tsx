import '@fontsource/roboto';
import 'nprogress/nprogress.css';
import 'react-multi-carousel/lib/styles.css';
import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { theme } from 'src/config/theme';
import i18n from 'src/i18n';
import { store } from 'src/store/store';

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		Router.events.on('routeChangeStart', handleRouteStart);
		Router.events.on('routeChangeComplete', handleRouteDone);
		Router.events.on('routeChangeError', handleRouteDone);

		return () => {
			Router.events.off('routeChangeStart', handleRouteStart);
			Router.events.off('routeChangeComplete', handleRouteDone);
			Router.events.off('routeChangeError', handleRouteDone);
		};
	}, []);

	return (
		<HydrationProvider>
			<Provider store={store}>
				<I18nextProvider i18n={i18n}>
					<ChakraProvider theme={theme}>
						<Client>
							<Component {...pageProps} />
						</Client>
					</ChakraProvider>
				</I18nextProvider>
			</Provider>
		</HydrationProvider>
	);
}

export default MyApp;
