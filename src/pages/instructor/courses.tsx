import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layouts/instructor';

const Courses: NextPage = () => {
	return <div>Courses</div>;
};

export default withInstructorLayout(Courses);
