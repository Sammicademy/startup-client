import { GetServerSideProps } from 'next';
import { CourseType } from 'src/interfaces/course.interface';
import { withAdminLayout } from 'src/layouts/admin';
import { AdminCoursesPageComponent } from 'src/page-component';
import { AdminService } from 'src/services/admin.service';

const Courses = () => {
	return (
		<>
			<AdminCoursesPageComponent />
		</>
	);
};

export default withAdminLayout(Courses);

export const getServerSideProps: GetServerSideProps<CoursesPageType> = async () => {
	const courses = await AdminService.getAllCourses();

	return {
		props: { courses },
	};
};

interface CoursesPageType extends Record<string, unknown> {
	courses: CourseType[];
}
