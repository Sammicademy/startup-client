import { GetServerSideProps } from 'next';
import { CourseType } from 'src/interfaces/course.interface';
import { withInstructorLayout } from 'src/layouts/instructor';
import { CurriculumPageComponent } from 'src/page-component';
import { InstructorService } from 'src/services/instructor.service';

const CurriculumPage = () => {
	return <CurriculumPageComponent />;
};

export default withInstructorLayout(CurriculumPage);

export const getServerSideProps: GetServerSideProps<CoursesPageType> = async ({ req, query }) => {
	const course = await InstructorService.getDetailedCourse(
		req.cookies.refresh,
		query.slug as string
	);

	return {
		props: { course },
	};
};

interface CoursesPageType extends Record<string, unknown> {
	course: CourseType;
}
