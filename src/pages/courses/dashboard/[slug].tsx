import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CourseType } from 'src/interfaces/course.interface';
import { LessonType } from 'src/interfaces/instructor.interface';
import { DashboardPageComponent } from 'src/page-component';
import { AppService } from 'src/services/app.service';

const DashboardCourse: NextPage<CourseDashboardPage> = ({
	course,
}) => {
	const { sections } = useTypedSelector(state => state.section);
	const { getCourse, getLesson } = useActions();
	const router = useRouter();

	useEffect(() => {
		getCourse(course);
	}, [course]);

	useEffect(() => {
		const link = `/courses/dashboard/${course?.slug}`;
		const lessonId = localStorage.getItem(course._id);

		if (sections.length) {
			const allLessons = sections.map(c => c.lessons).flat();
			if (!lessonId) {
				const currentLesson = allLessons[0];
				getLesson(currentLesson);
				router.replace(
					{ pathname: link, query: { lesson: currentLesson._id } },
					undefined,
					{ shallow: true }
				);
			} else {
				const currentLesson = allLessons.find(
					c => c._id === lessonId
				);
				getLesson(currentLesson as LessonType);
				router.replace(
					{ pathname: link, query: { lesson: currentLesson?._id } },
					undefined,
					{ shallow: true }
				);
			}
		}
	}, [sections]);

	return <DashboardPageComponent />;
};

export default DashboardCourse;

export const getServerSideProps: GetServerSideProps<
	CourseDashboardPage
> = async ({ query }) => {
	const course = await AppService.getDetailedCourse(
		query.slug as string
	);

	return {
		props: { course },
	};
};

interface CourseDashboardPage {
	course: CourseType;
}
