import { Box, Flex, Grid, GridItem, Heading, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';
import SectionTitle from '../section-title/section-title';

const Instructors = () => {
	const { t } = useTranslation();

	return (
		<>
			<SectionTitle title={t('instructor_title', { ns: 'home' })} subtitle={t('instructor_description', { ns: 'home' })} />

			<Grid gap={3} gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }} mt={5}>
				{data.map((item, idx) => (
					<GridItem key={idx}>
						<Stack spacing={3}>
							<Image src={item.avatar} alt={item.firstName} borderRadius={'lg'} h={'330px'} objectFit={'cover'} />
							<Heading fontSize={'xl'}>
								{item.firstName} {item.lastName}
							</Heading>
							<Text color={'gray.500'}>{item.job}</Text>
							<HStack opacity={'.6'}>
								<Flex align={'center'} gap={1}>
									<Icon as={FaUserGraduate} />
									<Text>{item.students} students</Text>
								</Flex>
								<Flex align={'center'} gap={1}>
									<Icon as={AiOutlinePlayCircle} />
									<Text>{item.courses} courses</Text>
								</Flex>
							</HStack>
						</Stack>
					</GridItem>
				))}
			</Grid>

			<Text textAlign={'center'}>
				{t('instructor_link_title', { ns: 'home' })}{' '}
				<Box as={'span'} color={'teal'} _hover={{ textDecoration: 'underline' }}>
					<Link href={'/become-instructor'}>{t('instructor_link_router', { ns: 'home' })}</Link>
				</Box>
			</Text>
		</>
	);
};

export default Instructors;

const data = [
	{
		firstName: 'Samar',
		lastName: 'Badrddinov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
	},
	{
		firstName: 'Samar',
		lastName: 'Badrddinov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
	},
	{
		firstName: 'Samar',
		lastName: 'Badrddinov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
	},
	{
		firstName: 'Samar',
		lastName: 'Badrddinov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
	},
];
