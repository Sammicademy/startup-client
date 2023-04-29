import { withAdminLayout } from 'src/layouts/admin';
import { AdminCoursesPageComponent } from 'src/page-component';

const Courses = () => {
	return (
		<>
			<AdminCoursesPageComponent />
		</>
	);
};

export default withAdminLayout(Courses);
