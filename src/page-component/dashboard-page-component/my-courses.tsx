import { AllCoursesCard } from 'src/components';
import { courses } from 'src/config/constants';

const MyCourses = () => {
	return (
		<>
			{courses.map(course => (
				<AllCoursesCard course={course} />
			))}
		</>
	);
};

export default MyCourses;
