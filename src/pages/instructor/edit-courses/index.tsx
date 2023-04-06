import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layouts/instructor';
import { EditCoursePageComponent } from 'src/page-component';

const EditCourses: NextPage = () => {
	return <EditCoursePageComponent />;
};

export default withInstructorLayout(EditCourses);
