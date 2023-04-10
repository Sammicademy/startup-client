import { GetServerSideProps, NextPage } from 'next';
import { CourseType } from 'src/interfaces/course.interface';
import { withInstructorLayout } from 'src/layouts/instructor';
import { InstructorCoursesPageComponent } from 'src/page-component';
import { InstructorService } from 'src/services/instructor.service';

const Courses: NextPage<CoursesPageType> = () => {
	return <InstructorCoursesPageComponent />;
};

export default withInstructorLayout(Courses);

export const getServerSideProps: GetServerSideProps<CoursesPageType> = async ({ req }) => {
	const courses = await InstructorService.getAllCourses(req.cookies.refresh);

	return {
		props: { courses },
	};
};

interface CoursesPageType extends Record<string, unknown> {
	courses: CourseType[];
}
