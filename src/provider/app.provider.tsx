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
		if (courses?.length == 0) {
			getCourses([]);
		}
		if (instructors?.length == 0) {
			getInstructors([]);
		}
		if (courses?.length) {
			getCourses(courses);
		}
		if (instructors?.length) {
			getInstructors(instructors);
		}
		if (course) {
			getCourse(course);
		}
	}, [courses, course]);

	return <>{children}</>;
};

export default AppProvider;
