import { BooksType } from 'src/interfaces/books.interface';

export interface BookModalProps {
	isOpen: boolean;
	onClose: () => void;
	booksValue: BooksType | null;
}
