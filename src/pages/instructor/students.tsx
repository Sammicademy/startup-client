import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layouts/instructor';
import { StudentsPageComponent } from 'src/page-component';

const Students: NextPage = () => {
	return <StudentsPageComponent />;
};

export default withInstructorLayout(Students);
