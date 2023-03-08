import { withLayout } from 'src/layouts/layout';
import { BooksPageComponent } from 'src/page-component';

const Books = () => {
	return <BooksPageComponent />;
};

export default withLayout(Books);
