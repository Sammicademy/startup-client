import { FC, ReactNode, useEffect } from 'react';
import { useActions } from 'src/hooks/useActions';
import { CourseType } from 'src/interfaces/course.interface';

interface Props {
	children: ReactNode;
	courses: CourseType[];
	course: CourseType;
}

const InstructorProvider: FC<Props> = ({ children, course, courses }): JSX.Element => {
	const { instructorAllCourses, instructorDetailedCourse } = useActions();

	useEffect(() => {
		if (courses?.length) {
			instructorAllCourses(courses);
		}
		if (course) {
			instructorDetailedCourse(course);
		}
	}, [courses, course]);

	return <>{children}</>;
};

export default InstructorProvider;
