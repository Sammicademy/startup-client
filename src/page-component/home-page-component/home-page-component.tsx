import { Stack } from '@chakra-ui/react';
import { Categories, Hero, HowItWorks, Instructors, Newsletter, PopularCourses, Sposorship, Testimonials } from 'src/components';

const HomePageComponent = () => {
	return (
		<Stack spacing={10}>
			<Hero />
			<Categories />
			<PopularCourses />
			<HowItWorks />
			<Instructors />
			<Testimonials />
			<Newsletter />
			<Sposorship />
		</Stack>
	);
};

export default HomePageComponent;
