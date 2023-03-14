import { Box, Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { BsCheck } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

const Overview = () => {
	const { t } = useTranslation();

	const whatYouLearn = 'AJAX, JavaScript, Fetch, OOP, API, JSON, Promise';
	const requirement = 'Basic HTML, CSS, JavaSciprt, SASS, Advanced API';

	return (
		<>
			<Heading mt={10}>{t('overview', { ns: 'courses' })}</Heading>
			<Text mt={3}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora
				itaque expedita rem eveniet fugit! Mollitia expedita corporis eligendi
				earum, beatae cumque ipsum, alias neque ab facilis natus nesciunt
				commodi!
			</Text>
			<Heading mt={10}>{t('what_you_will_learn', { ns: 'courses' })}</Heading>
			<Grid
				mt={5}
				gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
			>
				{whatYouLearn.split(', ').map((text, idx) => (
					<Flex key={idx} gap={3} align={'center'} my={1}>
						<Icon as={BsCheck} w={6} h={6} borderRadius={'100%'} p={1} />
						<Text>{text}</Text>
					</Flex>
				))}
			</Grid>
			<Heading mt={10}>{t('required', { ns: 'courses' })}</Heading>
			<Box mt={3}>
				{requirement.split(', ').map((text, idx) => (
					<Flex key={idx} gap={2} align={'center'}>
						<Icon as={GoPrimitiveDot} w={5} h={5} />
						<Text>{text}</Text>
					</Flex>
				))}
			</Box>
		</>
	);
};

export default Overview;
