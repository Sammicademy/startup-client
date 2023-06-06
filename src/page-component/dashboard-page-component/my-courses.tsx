import { FC } from 'react';
import { AllCoursesCard } from 'src/components';
import { MyCoursesProps } from './dashboard.props';

const MyCourses: FC<MyCoursesProps> = ({
	myCourses,
}): JSX.Element => {
	return (
		<>
			{myCourses.map(course => (
				<AllCoursesCard course={course} isMyCourse={true} />
			))}
		</>
	);
};

export default MyCourses;
