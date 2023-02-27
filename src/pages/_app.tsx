import '../styles/globals.css';
import '@fontsource/roboto';
import 'react-multi-carousel/lib/styles.css';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'src/config/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/i18n';
import { Client, HydrationProvider } from 'react-hydration-provider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<HydrationProvider>
			<I18nextProvider i18n={i18n}>
				<ChakraProvider theme={theme}>
					<Client>
						<Component {...pageProps} />
					</Client>
				</ChakraProvider>
			</I18nextProvider>
		</HydrationProvider>
	);
}

export default MyApp;
