import { withAdminLayout } from 'src/layouts/admin';
import { InstructorPageComponent } from 'src/page-component';

const Instructor = () => {
	return <InstructorPageComponent />;
};

export default withAdminLayout(Instructor);
