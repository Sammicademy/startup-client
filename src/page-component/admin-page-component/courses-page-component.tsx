import { Box, Card, CardBody, Flex, HStack } from '@chakra-ui/react';
import SectionTitle from 'src/components/section-title/section-title';
import { LaunchCourseIcon } from 'src/icons';

const CoursesPageComponent = () => {
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
		</>
	);
};

export default CoursesPageComponent;
