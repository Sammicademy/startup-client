import { FC, ReactNode, useEffect } from 'react';
import { useActions } from 'src/hooks/useActions';
import { BooksType } from 'src/interfaces/books.interface';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';

interface Props {
	children: ReactNode;
	courses: CourseType[];
	course: CourseType;
	instructors: InstructorType[];
	books: BooksType[];
}

const AppProvider: FC<Props> = ({ children, course, courses, instructors, books }): JSX.Element => {
	const { getCourses, getCourse, getInstructors, getBooks } = useActions();

	useEffect(() => {
		if (courses?.length) {
			getCourses(courses);
		}
		if (instructors?.length) {
			getInstructors(instructors);
		}
		if (course) {
			getCourse(course);
		}
		if (books?.length) {
			getBooks(books);
		}
	}, [courses, course]);

	return <>{children}</>;
};

export default AppProvider;
