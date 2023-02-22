import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: true,
};

export const theme = extendTheme({
	config,
	fonts: {
		heading: "'Roboto', sans-serif",
		body: "'Roboto', sans-serif",
	},
});
