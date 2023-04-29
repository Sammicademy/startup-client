import { withAdminLayout } from 'src/layouts/admin';
import { AdminBooksPageComponent } from 'src/page-component';

const Books = () => {
	return (
		<>
			<AdminBooksPageComponent />
		</>
	);
};

export default withAdminLayout(Books);
