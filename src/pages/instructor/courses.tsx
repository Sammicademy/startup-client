import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layouts/instructor';
import { InstructorCoursesPageComponent } from 'src/page-component';

const Courses: NextPage = () => {
	return <InstructorCoursesPageComponent />;
};

export default withInstructorLayout(Courses);
