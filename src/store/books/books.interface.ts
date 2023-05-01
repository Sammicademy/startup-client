import { BooksType } from 'src/interfaces/books.interface';

export interface BooksInitialState {
	isLoading: boolean;
	error: null | unknown;
	books: BooksType[];
}

export interface ActionBody extends BooksType {
	callback: () => void;
}

export interface DeleteBooksBody {
	callback: () => void;
	booksId: string;
}
