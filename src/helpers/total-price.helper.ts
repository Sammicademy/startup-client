import { BooksType } from 'src/interfaces/books.interface';
import { CourseType } from 'src/interfaces/course.interface';
import { BalanceType } from 'src/interfaces/instructor.interface';

export const getTotalPrice = (courses: CourseType[], books: BooksType[]): number => {
	const booksPrice = books.reduce((total, item) => total + item.price, 0);
	const coursesPrice = courses.reduce((total, item) => total + item.price, 0);
	const totalPrice = booksPrice + coursesPrice;
	return totalPrice;
};

export const getBalanceObject = (balance: BalanceType) => {
	const payouts = balance.pending.reduce((total, item) => (total = item.amount), 0);

	return {
		payouts: payouts / 100,
	};
};
