import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { HomePageComponent } from 'src/page-component';
import { AppService } from 'src/services/app.service';

const Home = () => {
	const { t } = useTranslation();

	return (
		<Seo
			metaTitle={`Sammi | ${t('main_page_title', { ns: 'seo' })}`}
			metaDescription={`${t('main_page_description', { ns: 'seo' })}`}
		>
			<HomePageComponent />
		</Seo>
	);
};

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps<MainPageProps> = async ({ req }) => {
	const response = await AppService.getMainPageSource(req.cookies.i18next);

	return {
		props: { courses: response.courses, instructors: response.instructors },
	};
};

interface MainPageProps {
	courses: CourseType[];
	instructors: InstructorType[];
}
