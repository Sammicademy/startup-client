import { GetServerSideProps, NextPage } from 'next';
import { CourseType } from 'src/interfaces/course.interface';
import { withInstructorLayout } from 'src/layouts/instructor';
import { EditCoursePageComponent } from 'src/page-component';
import { InstructorService } from 'src/services/instructor.service';

const EditCourses: NextPage = () => {
	return <EditCoursePageComponent />;
};

export default withInstructorLayout(EditCourses);

export const getServerSideProps: GetServerSideProps<CoursesPageType> = async ({ req }) => {
	const courses = await InstructorService.getAllCourses(req.cookies.refresh);

	return {
		props: { courses },
	};
};

interface CoursesPageType extends Record<string, unknown> {
	courses: CourseType[];
}
