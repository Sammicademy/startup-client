import { BooksType } from 'src/interfaces/books.interface';
import { CourseType } from 'src/interfaces/course.interface';

export const getTotalPrice = (courses: CourseType[], books: BooksType[]): number => {
	return getBooksPrice(books) + getCoursesPrice(courses);
};

export const getBooksPrice = (books: BooksType[]): number => {
	const booksPrice = books.reduce((total, item) => total + item.price, 0);
	return booksPrice;
};

export const getCoursesPrice = (courses: CourseType[]): number => {
	const coursesPrice = courses.reduce((total, item) => total + item.price, 0);
	return coursesPrice;
};
