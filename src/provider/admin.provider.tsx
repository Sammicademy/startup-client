import { FC, ReactNode, useEffect } from 'react';
import { useActions } from 'src/hooks/useActions';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';
import { UserType } from 'src/interfaces/user.interface';

interface Props {
	children: ReactNode;
	courses: CourseType[];
	instructors: InstructorType[];
	users: UserType[];
}

const AdminProvider: FC<Props> = ({ children, courses, instructors, users }): JSX.Element => {
	const { getCourses, getInstructors, getUsers } = useActions();

	useEffect(() => {
		if (courses?.length) {
			getCourses(courses);
		} else {
			getCourses([]);
		}
		if (instructors?.length) {
			getInstructors(instructors);
		} else {
			getInstructors([]);
		}
		if (users?.length) {
			getUsers(users);
		} else {
			getUsers([]);
		}
	}, [courses, instructors, users]);

	return <>{children}</>;
};

export default AdminProvider;
