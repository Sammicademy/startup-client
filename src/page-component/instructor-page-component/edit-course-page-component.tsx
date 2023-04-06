import { Grid } from '@chakra-ui/react';
import { InstructorEditCourseCard } from 'src/components';
import SectionTitle from 'src/components/section-title/section-title';
import { courses } from 'src/config/constants';

const EditCoursePageComponent = () => {
	return (
		<>
			<SectionTitle
				title='Edit courses'
				subtitle='Managing courses and create curriculum for your courses'
			/>
			<Grid gridTemplateColumns={'1fr 1fr'} gap={4}>
				{courses.map(item => (
					<InstructorEditCourseCard key={item.slug} item={item} />
				))}
			</Grid>
		</>
	);
};

export default EditCoursePageComponent;
