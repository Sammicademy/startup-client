import { Box, Heading, Text } from '@chakra-ui/react';
import { SectionTitleProps } from './section-title.props';

const SectionTitle = ({ title, subtitle, ...props }: SectionTitleProps): JSX.Element => {
	return (
		<Box {...props}>
			<Heading as={'h3'}>{title}</Heading>
			<Text mt={1} opacity={'.8'}>
				{subtitle}
			</Text>
		</Box>
	);
};

export default SectionTitle;
