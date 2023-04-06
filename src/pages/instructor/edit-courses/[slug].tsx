import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layouts/instructor';
import { EditDetailedCoursePageComponent } from 'src/page-component';

const EditDetailedCourses: NextPage = () => {
	return <EditDetailedCoursePageComponent />;
};

export default withInstructorLayout(EditDetailedCourses);
