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
	const { getAdminCourses, getAdminInstructors, getAdminUsers } = useActions();

	useEffect(() => {
		if (courses?.length) {
			getAdminCourses(courses);
		} else {
			getAdminCourses([]);
		}
		if (instructors?.length) {
			getAdminInstructors(instructors);
		} else {
			getAdminInstructors([]);
		}
		if (users?.length) {
			getAdminUsers(users);
		} else {
			getAdminUsers([]);
		}
	}, [courses, instructors, users]);

	return <>{children}</>;
};

export default AdminProvider;
