import { FC, ReactNode, useEffect } from 'react';
import { useActions } from 'src/hooks/useActions';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';

interface Props {
	children: ReactNode;
	courses: CourseType[];
	course: CourseType;
	instructors: InstructorType[];
}

const AppProvider: FC<Props> = ({ children, course, courses, instructors }): JSX.Element => {
	const { getCourses, getCourse, getInstructors } = useActions();

	useEffect(() => {
		if (courses.length) {
			getCourses(courses);
		} else {
			getCourses([]);
		}
		if (instructors.length) {
			getInstructors(instructors);
		} else {
			getCourses([]);
		}
		if (course) {
			getCourse(course);
		}
	}, [courses, course]);

	return <>{children}</>;
};

export default AppProvider;
