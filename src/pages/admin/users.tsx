import { withAdminLayout } from 'src/layouts/admin';
import { UserPageComponent } from 'src/page-component';

const Users = () => {
	return <UserPageComponent />;
};

export default withAdminLayout(Users);
