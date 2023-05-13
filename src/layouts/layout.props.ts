import { ReactNode } from 'react';
import { BooksType } from 'src/interfaces/books.interface';
import { CardType, ProductsType } from 'src/interfaces/constants.interface';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';

export interface LayoutProps {
	children: ReactNode;
}

export interface AppProviderProps {
	courses: CourseType[];
	course: CourseType;
	instructors: InstructorType[];
	books: BooksType[];
	cards: CardType[];
	products: ProductsType[];
}
