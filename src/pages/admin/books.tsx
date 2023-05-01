import { GetServerSideProps } from 'next';
import { BooksType } from 'src/interfaces/books.interface';
import { withAdminLayout } from 'src/layouts/admin';
import { AdminBooksPageComponent } from 'src/page-component';
import { BooksService } from 'src/services/books.service';

const Books = () => {
	return (
		<>
			<AdminBooksPageComponent />
		</>
	);
};

export default withAdminLayout(Books);

export const getServerSideProps: GetServerSideProps<BooksPageType> = async () => {
	const books = await BooksService.get();

	return {
		props: { books },
	};
};

interface BooksPageType extends Record<string, unknown> {
	books: BooksType[];
}
