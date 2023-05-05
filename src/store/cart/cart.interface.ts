import { BooksType } from 'src/interfaces/books.interface';
import { CourseType } from 'src/interfaces/course.interface';

export interface CartInitialState {
	books: BooksType[];
	courses: CourseType[];
}
