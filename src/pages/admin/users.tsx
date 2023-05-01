import { GetServerSideProps } from 'next';
import { UserType } from 'src/interfaces/user.interface';
import { withAdminLayout } from 'src/layouts/admin';
import { UserPageComponent } from 'src/page-component';
import { AdminService } from 'src/services/admin.service';

const Users = () => {
	return <UserPageComponent />;
};

export default withAdminLayout(Users);

export const getServerSideProps: GetServerSideProps<UserPageType> = async ({ req }) => {
	const users = await AdminService.getUsers('10', req.cookies.refresh);

	return {
		props: { users },
	};
};

interface UserPageType extends Record<string, unknown> {
	users: UserType[];
}
