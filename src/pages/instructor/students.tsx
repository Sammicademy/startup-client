import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layouts/instructor';
import { InstructorStudentsPageComponent } from 'src/page-component';

const Students: NextPage = () => {
	return <InstructorStudentsPageComponent />;
};

export default withInstructorLayout(Students);
