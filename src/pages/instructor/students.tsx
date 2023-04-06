import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layouts/instructor';

const Students: NextPage = () => {
	return <div>Students</div>;
};

export default withInstructorLayout(Students);
