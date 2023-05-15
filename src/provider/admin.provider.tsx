import { FC, ReactNode, useEffect } from 'react';
import { useActions } from 'src/hooks/useActions';
import { BooksType } from 'src/interfaces/books.interface';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';
import { UserType } from 'src/interfaces/user.interface';

interface Props {
	children: ReactNode;
	courses: CourseType[];
	instructors: InstructorType[];
	users: UserType[];
	books: BooksType[];
}

const AdminProvider: FC<Props> = ({
	children,
	courses,
	instructors,
	users,
	books,
}): JSX.Element => {
	const { getAdminCourses, getAdminInstructors, getAdminUsers, getBooks } = useActions();

	useEffect(() => {
		if (courses?.length) {
			getAdminCourses(courses);
		}
		if (instructors?.length) {
			getAdminInstructors(instructors);
		}
		if (users?.length) {
			getAdminUsers(users);
		}
		if (books?.length) {
			getBooks(books);
		}
	}, [courses, instructors, users, books]);

	return <>{children}</>;
};

export default AdminProvider;
