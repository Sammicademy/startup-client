import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CourseType } from 'src/interfaces/course.interface';

interface Props {
	children: ReactNode;
	courses: CourseType[];
	course: CourseType;
}

const InstructorProvider: FC<Props> = ({ children, course, courses }): JSX.Element => {
	const [isInstructor, setIsInstructor] = useState<boolean>(false);
	const { instructorAllCourses, instructorDetailedCourse } = useActions();
	const { user } = useTypedSelector(state => state.user);
	const router = useRouter();

	useEffect(() => {
		if (courses?.length == 0) {
			instructorAllCourses([]);
		}
		if (courses?.length) {
			instructorAllCourses(courses);
		}
		if (course) {
			instructorDetailedCourse(course);
		}
		if (user && user?.role === 'INSTRUCTOR') {
			setIsInstructor(true);
		} else {
			router.push('/');
		}
	}, [courses, course, user]);

	return <>{isInstructor ? children : 'Checking your data'}</>;
};

export default InstructorProvider;
