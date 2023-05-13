import { BooksType } from 'src/interfaces/books.interface';
import { ProductsType } from 'src/interfaces/constants.interface';
import { CourseType } from 'src/interfaces/course.interface';

export interface CartInitialState {
	books: BooksType[];
	courses: CourseType[];
	product: ProductsType;
}
