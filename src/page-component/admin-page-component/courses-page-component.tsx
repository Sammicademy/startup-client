import { Box, Card, CardBody, Flex, Grid, HStack } from '@chakra-ui/react';
import { AdminCourseCard, ErrorAlert } from 'src/components';
import SectionTitle from 'src/components/section-title/section-title';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { LaunchCourseIcon } from 'src/icons';

const CoursesPageComponent = () => {
	const { courses } = useTypedSelector(state => state.admin);
	const { error } = useTypedSelector(state => state.admin);
	const { clearAdminError } = useActions();

	return (
		<>
			<Card mt={10}>
				<CardBody>
					<HStack>
						<Box w={'30%'}>
							<SectionTitle title='Courses' subtitle='All courses and managing on platform' />
						</Box>
						<Flex w={'70%'} justify={'flex-end'}>
							<LaunchCourseIcon />
						</Flex>
					</HStack>
				</CardBody>
			</Card>
			<>{error && <ErrorAlert title={error as string} clearHandler={clearAdminError} />}</>
			<Grid gridTemplateColumns={'repeat(3, 1fr)'} gap={4}>
				{courses.map(c => (
					<AdminCourseCard key={c._id} course={c} />
				))}
			</Grid>
		</>
	);
};

export default CoursesPageComponent;
