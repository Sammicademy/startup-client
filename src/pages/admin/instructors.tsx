import { GetServerSideProps } from 'next';
import { InstructorType } from 'src/interfaces/instructor.interface';
import { withAdminLayout } from 'src/layouts/admin';
import { InstructorPageComponent } from 'src/page-component';
import { AdminService } from 'src/services/admin.service';

const Instructor = () => {
	return <InstructorPageComponent />;
};

export default withAdminLayout(Instructor);

export const getServerSideProps: GetServerSideProps<InstructorPageType> = async ({ req }) => {
	const instructors = await AdminService.getAllInstructors(req.cookies.refresh);

	return {
		props: { instructors },
	};
};

interface InstructorPageType extends Record<string, unknown> {
	instructors: InstructorType[];
}
