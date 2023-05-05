import { BooksType } from 'src/interfaces/books.interface';
import { CourseType } from 'src/interfaces/course.interface';

export const getTotalPrice = (courses: CourseType[], books: BooksType[]): number => {
	const booksPrice = books.reduce((total, item) => total + item.price, 0);
	const coursesPrice = courses.reduce((total, item) => total + item.price, 0);

	return booksPrice + coursesPrice;
};
