import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layouts/instructor';
import { InstructorDraftCourseComponent } from 'src/page-component';

const DraftCourses: NextPage = () => {
	return <InstructorDraftCourseComponent />;
};

export default withInstructorLayout(DraftCourses);
